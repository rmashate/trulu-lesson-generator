// pages/my-games.js
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Game from '../components/Game';
import { generateGame } from '../services/gameService';

export default function MyGames() {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const gameParams = JSON.parse(localStorage.getItem('gameParams'));
    if (gameParams) {
      handleGenerateGame(gameParams);
    }
  }, []);

  const handleGenerateGame = async (params) => {
    setLoading(true);
    try {
      const generatedGame = await generateGame(params);
      setGame(generatedGame);
    } catch (error) {
      console.error('Failed to generate game:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Games</h1>
        {loading ? (
          <p>Generating your game...</p>
        ) : game ? (
          <Game game={game} />
        ) : (
          <p>No games generated yet. Go back to the home page to create a game!</p>
        )}
      </div>
    </Layout>
  );
}