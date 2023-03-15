// Components
import { Hero } from 'components/Hero';
import { SearchBox } from 'components/SearchBox';

// Styles
import { Main } from './CharactersFeed.styled';

const CharactersFeed = () => {
  return (
    <Main>
      <Hero />
      <SearchBox />
    </Main>
  );
};

export default CharactersFeed;
