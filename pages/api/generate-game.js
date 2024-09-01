import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { childAge, schoolGrade, subject, questionCount } = req.body;

  try {
    const systemPrompt = "You are an educational game designer. Create engaging and age-appropriate content.";
    const humanPrompt = `Generate an educational game for a ${childAge}-year-old in grade ${schoolGrade} about ${subject} with ${questionCount} questions. Include a title, description, and multiple-choice questions with answers. Format the response as a JSON object.`;
    
    const fullPrompt = `${systemPrompt}\n\nHuman: ${humanPrompt}\n\nAssistant: Certainly! I'd be happy to create an educational game based on your requirements. Here's the game in JSON format:`;

    const response = await axios.post(
      'https://api.anthropic.com/v1/complete',
      {
        prompt: fullPrompt,
        model: "claude-2",
        max_tokens_to_sample: 1000,
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': process.env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01'
        },
      }
    );

    // The response from Claude will be a string, so we need to extract the JSON part
    const jsonStart = response.data.completion.indexOf('{');
    const jsonEnd = response.data.completion.lastIndexOf('}') + 1;
    const jsonString = response.data.completion.slice(jsonStart, jsonEnd);

    const gameContent = JSON.parse(jsonString);

    res.status(200).json(gameContent);
  } catch (error) {
    console.error('Error details:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Error generating game', details: error.message });
  }
}