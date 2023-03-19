// Core
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from 'context/userContext';

// Components
import { SignIn } from 'components/SignIn';
import { SignUp } from 'components/SignUp';

// Styles
import { Container, Btn, Divider, Span, P } from './Auth.styled';

export const Auth = () => {
  const [index, setIndex] = useState(false);
  const navigate = useNavigate();

  const toggleIndex = () => setIndex(prevState => !prevState);

  const { user, signInWithGoogle, signInWithGithub, signInWithFacebook } =
    useUserContext();

  useEffect(() => {
    if (user) navigate('/');
  }, [navigate, user]);

  return (
    <Container>
      {!index ? <SignIn /> : <SignUp />}
      <Divider>
        <Span>OR</Span>
      </Divider>
      <Btn onClick={signInWithGoogle}>Continue with Google</Btn>
      <Btn onClick={signInWithGithub}>Continue with GitHub</Btn>
      <Btn onClick={signInWithFacebook}>Continue with Facebook</Btn>

      <P onClick={toggleIndex}>
        {!index ? 'New user? Click here ' : 'Already have an acount?'}
      </P>
    </Container>
  );
};
