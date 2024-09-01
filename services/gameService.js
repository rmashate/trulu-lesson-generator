// services/gameService.js
export async function generateGame(params) {
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
  
    const data = await response.json();
    
    // Ensure the response is in the expected format
    if (!data.title || !data.description || !Array.isArray(data.questions)) {
      throw new Error('Invalid game data received');
    }
  
    return data;
  }