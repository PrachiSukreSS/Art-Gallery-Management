const API_BASE_URL = 'http://localhost:5000/api';

// Artwork API calls
export const artworkAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/artworks`);
    if (!response.ok) throw new Error('Failed to fetch artworks');
    return response.json();
  },

  create: async (artwork) => {
    const response = await fetch(`${API_BASE_URL}/artworks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(artwork)
    });
    if (!response.ok) throw new Error('Failed to create artwork');
    return response.json();
  },

  update: async (id, artwork) => {
    const response = await fetch(`${API_BASE_URL}/artworks/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(artwork)
    });
    if (!response.ok) throw new Error('Failed to update artwork');
    return response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_BASE_URL}/artworks/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Failed to delete artwork');
    return response.json();
  }
};

// Artist API calls
export const artistAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/artists`);
    if (!response.ok) throw new Error('Failed to fetch artists');
    return response.json();
  },

  create: async (artist) => {
    const response = await fetch(`${API_BASE_URL}/artists`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(artist)
    });
    if (!response.ok) throw new Error('Failed to create artist');
    return response.json();
  },

  update: async (id, artist) => {
    const response = await fetch(`${API_BASE_URL}/artists/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(artist)
    });
    if (!response.ok) throw new Error('Failed to update artist');
    return response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_BASE_URL}/artists/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Failed to delete artist');
    return response.json();
  }
};

// Exhibition API calls
export const exhibitionAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/exhibitions`);
    if (!response.ok) throw new Error('Failed to fetch exhibitions');
    return response.json();
  },

  create: async (exhibition) => {
    const response = await fetch(`${API_BASE_URL}/exhibitions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(exhibition)
    });
    if (!response.ok) throw new Error('Failed to create exhibition');
    return response.json();
  },

  update: async (id, exhibition) => {
    const response = await fetch(`${API_BASE_URL}/exhibitions/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(exhibition)
    });
    if (!response.ok) throw new Error('Failed to update exhibition');
    return response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_BASE_URL}/exhibitions/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Failed to delete exhibition');
    return response.json();
  }
};