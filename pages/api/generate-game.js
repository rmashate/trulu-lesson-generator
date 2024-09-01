import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { childAge, schoolGrade, subject, questionCount } = req.body;

  try {
    const prompt = `Generate an educational game for a ${childAge}-year-old in grade ${schoolGrade} about ${subject} with ${questionCount} questions. Include a title, description, and multiple-choice questions with answers. Format the response as a JSON object.`;

    console.log('API Key:', process.env.ANTHROPIC_API_KEY); // Log the API key (remove in production)

    const response = await axios.post(
      'https://api.anthropic.com/v1/complete',
      {
        prompt: prompt,
        model: "claude-3-5-sonnet-20240620",
        max_tokens_to_sample: 1000,
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': process.env.ANTHROPIC_API_KEY,
        },
      }
    );

    const gameContent = JSON.parse(response.data.completion);

    res.status(200).json(gameContent);
  } catch (error) {
    console.error('Error details:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Error generating game', details: error.message });
  }
}