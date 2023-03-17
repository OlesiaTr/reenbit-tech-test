// Core
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

// API
import {
  getCharactersFeed,
  getCharactersByName,
} from 'services/rickAndMortyAPI';

// Components
import { Loader } from 'components/Loader';
import { Hero } from 'components/Hero';
import { SearchBox } from 'components/SearchBox';
import { CharacterList } from 'components/CharacterList';

// Styles
import { Container } from './CharactersFeed.styled';

const CharactersFeed = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [characters, setCharacters] = useState([]);

  const [searchParams] = useSearchParams();
  const characterName = searchParams.get('name') ?? '';

  useEffect(() => {
    const getCharacters = async () => {
      try {
        setLoading(true);
        setError('');
        const result = await getCharactersFeed();
        setCharacters(result);
        setLoading(false);
      } catch (error) {
        setError('Oops, something went wrong. Please, try again later!');
      }
    };

    getCharacters();
  }, []);

  useEffect(() => {
    if (characterName === '') return;

    const filterByName = async () => {
      try {
        setLoading(true);
        setError('');
        const result = await getCharactersByName(characterName);
        setCharacters(result);
        setLoading(false);
        if (result.length < 1)
          setError(
            'Sorry, we didn`t find any characters according to your request.'
          );
      } catch (error) {
        setError('Oops, something went wrong. Please, try again later!');
      }
    };

    filterByName();
  }, [characterName]);

  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);

  if (loading) return <Loader />;
  if (error) return <Toaster position="top-right" />;

  return (
    <main>
      <Container>
        <Hero />
        <SearchBox />
        {(characters.length > 0 && <CharacterList data={characters} />) ||
          (characterName !== '' && <CharacterList data={characters} />)}
      </Container>
    </main>
  );
};

export default CharactersFeed;
