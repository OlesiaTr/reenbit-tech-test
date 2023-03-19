// Components
import { Auth } from 'components/Auth';

// Img
import RickAndMorty from 'assets/imgs/Rick-and-Morty.jpg';

// Styles
import { Container, Img } from './Login.styled';

const Login = () => {
  return (
    <Container>
      <Img src={RickAndMorty} alt="Rick and Morty" />
      <Auth />
    </Container>
  );
};

export default Login;
