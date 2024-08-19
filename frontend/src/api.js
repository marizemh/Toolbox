// frontend/src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/files';

export const getFilesData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/data`);
    return response.data;
  } catch (error) {
    console.error('Error fetching files data', error);
    return [];
  }
};
