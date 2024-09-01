export async function generateGame(params) {
    if (typeof window === 'undefined') {
      // Server-side: return a placeholder or throw an error
      throw new Error('generateGame cannot be called server-side');
    }
  
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