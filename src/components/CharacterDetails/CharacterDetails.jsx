// Styles
import { Container } from './CharacterDetails.styled';

export const CharacterDetails = ({ data }) => {
  const { name, image, gender, species, status, origin, type } = data;

  return (
    <Container>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <h2>Informations</h2>
      <ul>
        <li>
          <h3>Gender</h3>
          <p>{gender ? gender : 'Unknown yet'}</p>
        </li>
        <li>
          <h3>Status</h3>
          <p>{status ? status : 'Unknown yet'}</p>
        </li>
        <li>
          <h3>Specie</h3>
          <p>{species ? species : 'Unknown yet'}</p>
        </li>
        <li>
          <h3>Origin</h3>
          <p>{origin.name ? origin.name : 'Unknown yet'}</p>
        </li>
        <li>
          <h3>Type</h3>
          <p>{type ? type : 'Unknown yet'}</p>
        </li>
      </ul>
    </Container>
  );
};
