// Core
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// Styles
import {
  Container,
  CardWrapper,
  Img,
  InfoWrapper,
  Name,
} from './CharacterList.styled';

export const CharacterList = ({ data }) => {
  const location = useLocation();

  return (
    <Container>
      {data.map(({ id, name, image, species }) => (
        <CardWrapper key={id}>
          <Link to={`/character/${id}`} state={{ from: location }}>
            <Img src={image} alt={name} />
            <InfoWrapper>
              <Name>{name}</Name>
              <p>{species}</p>
            </InfoWrapper>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};

CharacterList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
