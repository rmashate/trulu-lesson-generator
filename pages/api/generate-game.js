// pages/api/generate-game.js
import axios from 'axios';

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/complete';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { childAge, schoolGrade, subject, questionCount } = req.body;

  try {
    const prompt = `Generate an educational game for a ${childAge}-year-old in grade ${schoolGrade} about ${subject} with ${questionCount} questions. Include a title, description, and multiple-choice questions with answers. Format the response as a JSON object.`;

    const response = await axios.post(
      ANTHROPIC_API_URL,
      {
        prompt: prompt,
        model: "claude-2",
        max_tokens_to_sample: 1000,
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': ANTHROPIC_API_KEY,
        },
      }
    );

    const gameContent = JSON.parse(response.data.completion);

    res.status(200).json(gameContent);
  } catch (error) {
    console.error('Error generating game:', error);
    res.status(500).json({ message: 'Error generating game' });
  }
}