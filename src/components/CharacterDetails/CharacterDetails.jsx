// Styles
import {
  Container,
  Img,
  Name,
  Info,
  List,
  Item,
  InfoTitles,
  InfoDesc,
} from './CharacterDetails.styled';

export const CharacterDetails = ({ data }) => {
  const { name, image, gender, species, status, origin, type } = data;

  return (
    <Container>
      <Img src={image} alt={name} />
      <Name>{name}</Name>
      <Info>Informations</Info>
      <List>
        <Item>
          <InfoTitles>Gender</InfoTitles>
          <InfoDesc>{gender ? gender : 'Unknown yet'}</InfoDesc>
        </Item>
        <Item>
          <InfoTitles>Status</InfoTitles>
          <InfoDesc>{status ? status : 'Unknown yet'}</InfoDesc>
        </Item>
        <Item>
          <InfoTitles>Specie</InfoTitles>
          <InfoDesc>{species ? species : 'Unknown yet'}</InfoDesc>
        </Item>
        <Item>
          <InfoTitles>Origin</InfoTitles>
          <InfoDesc>{origin.name ? origin.name : 'Unknown yet'}</InfoDesc>
        </Item>
        <Item>
          <InfoTitles>Type</InfoTitles>
          <InfoDesc>{type ? type : 'Unknown yet'}</InfoDesc>
        </Item>
      </List>
    </Container>
  );
};
