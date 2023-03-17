// Core
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

// API
import { getCharacterDetails } from '../../services/rickAndMortyAPI';

// Components
import { BackLink } from 'components/BackLink';
import { Loader } from 'components/Loader';
import { CharacterDetails } from 'components/CharacterDetails';

// Styles
import { Main } from './CharacterInfo.styled';

const CharacterInfo = () => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { characterId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/feed';

  useEffect(() => {
    const getCharacterInfo = async () => {
      try {
        setLoading(true);
        setError('');
        const result = await getCharacterDetails(characterId);
        setCharacter(result);
        setLoading(false);
      } catch (error) {
        setError("Sorry, the character wasn't found😖");
      }
    };

    getCharacterInfo();
  }, [characterId]);

  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);

  if (loading) return <Loader />;
  if (error) return <Toaster position="top-right" />;

  return (
    <Main>
      <BackLink to={backLinkHref}> GO BACK </BackLink>
      {character && <CharacterDetails data={character} />}
    </Main>
  );
};

export default CharacterInfo;
