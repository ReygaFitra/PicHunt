import axios from 'axios';

const API_URL = 'https://api.pexels.com/v1/';
const IMAGE_PER_PAGE = 80;

export const FetchImageSearch = async (query) => {
  try {
    const response = await axios.get(`${API_URL}search?query=${query}&per_page=${IMAGE_PER_PAGE}&page=1`, {
      headers: {
        Authorization: import.meta.env.VITE_API_KEY,
      },
    });

    return response.data.photos;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};

export const FetchImageRandom = async () => {
  try {
    const response = await axios.get(`${API_URL}curated?per_page=${IMAGE_PER_PAGE}&page=1`, {
      headers: {
        Authorization: import.meta.env.VITE_API_KEY,
      },
    });

    return response.data.photos;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};
