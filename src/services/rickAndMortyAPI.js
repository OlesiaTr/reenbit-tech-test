// Utils
import axios from 'axios';

// Setups
axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

// HTTP requests
export const getCharactersFeed = async () => {
  try {
    const { data } = await axios.get('./character/?page=2');
    const result = sortByName(data.results);
    return normalizedList(result);
  } catch (error) {
    console.error('Error fetching character details:', error);
    throw error;
  }
};

export const getCharactersByName = async name => {
  try {
    const { data } = await axios.get(`./character/?name=${name}`);
    const result = sortByName(data.results);
    return normalizedList(result);
  } catch (error) {
    console.error('Error fetching character details:', error);
    throw error;
  }
};

export const getCharacterDetails = async id => {
  try {
    const { data } = await axios.get(`./character/${id}`);
    return data;
  } catch (error) {
    console.error('Error fetching character details:', error);
    throw error;
  }
};

const sortByName = characters =>
  characters.sort((a, b) => a.name.localeCompare(b.name));

const normalizedList = feed =>
  feed.map(({ id, name, species, image }) => ({
    id,
    name,
    species: species ? species : 'Unknown yet',
    image,
  }));
