import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { childAge, schoolGrade, subject, questionCount } = req.body;

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('ANTHROPIC_API_KEY is not set');
    return res.status(500).json({ message: 'Server configuration error' });
  }

  try {
    console.log('Received parameters:', { childAge, schoolGrade, subject, questionCount });

    const systemMessage = "You are an educational game designer. Create engaging and age-appropriate content.";
    const userMessage = `Generate an educational game for a ${childAge}-year-old in grade ${schoolGrade} about ${subject} with ${questionCount} questions. Include a title, description, and multiple-choice questions with answers. Format the response as a JSON object.`;

    console.log('Sending request to Anthropic API');
    const response = await axios.post(
      'https://api.anthropic.com/v1/messages',
      {
        model: "claude-3-sonnet-20240320",
        max_tokens: 1000,
        temperature: 0.7,
        system: systemMessage,
        messages: [
          { role: "user", content: userMessage }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01'
        },
      }
    );

    console.log('Received response from Anthropic API');
    const assistantMessage = response.data.content[0].text;
    console.log('Assistant message:', assistantMessage);

    const jsonStart = assistantMessage.indexOf('{');
    const jsonEnd = assistantMessage.lastIndexOf('}') + 1;
    const jsonString = assistantMessage.slice(jsonStart, jsonEnd);

    const gameContent = JSON.parse(jsonString);
    console.log('Parsed game content:', gameContent);

    res.status(200).json(gameContent);
  } catch (error) {
    console.error('Error details:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Error generating game', details: error.message });
  }
}