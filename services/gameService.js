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
  
    return response.json();
  }