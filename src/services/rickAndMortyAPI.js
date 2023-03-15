// Utils
import axios from 'axios';

// Setups
axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

// HTTP requests
export const getCharactersFeed = async () => {
  try {
    const { data } = await axios.get('./character');
    return data;
  } catch (error) {
    console.log('error:', error.message);
  }
};

export const getCharacterDetails = async id => {
  try {
    const { data } = await axios.get(`./character/${id}`);
    return data;
  } catch (error) {
    console.log('error:', error.message);
  }
};
