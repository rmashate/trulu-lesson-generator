import { useState, useEffect } from 'react';
import Layout from './Layout';

export default function MyGamesComponent() {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      setLoading(true);
      try {
        const gameParams = localStorage.getItem('gameParams');
        if (gameParams) {
          const params = JSON.parse(gameParams);
          const response = await fetch('/api/generate-game', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
          });

          if (!response.ok) {
            throw new Error('Failed to generate game');
          }

          const generatedGame = await response.json();
          setGame(generatedGame);
        }
      } catch (error) {
        console.error('Failed to generate game:', error);
        setError('Failed to generate game. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Games</h1>
        {loading && <p>Generating your game...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {game ? (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-green-500 mb-4">{game.title}</h2>
            <p className="text-gray-300 mb-4">{game.description}</p>
            <div className="space-y-4">
              {game.questions && game.questions.map((question, index) => (
                <div key={index} className="bg-gray-700 p-4 rounded-md">
                  <p className="font-medium mb-2">{question.text}</p>
                  <ul className="space-y-2">
                    {question.options && question.options.map((option, optionIndex) => (
                      <li key={optionIndex} className="flex items-center">
                        <input
                          type="radio"
                          id={`q${index}_o${optionIndex}`}
                          name={`question_${index}`}
                          className="mr-2"
                        />
                        <label htmlFor={`q${index}_o${optionIndex}`}>{option}</label>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>No games generated yet. Go back to the home page to create a game!</p>
        )}
      </div>
    </Layout>
  );
}