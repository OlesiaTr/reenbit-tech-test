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
          <Link to={`/feed/${id}`} state={{ from: location }}>
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
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
