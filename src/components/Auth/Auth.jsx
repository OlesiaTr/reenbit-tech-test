// Core
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from 'context/userContext';

// Components
import { SignIn } from 'components/SignIn';
import { SignUp } from 'components/SignUp';

// Styles
import { Container, Btn } from './Auth.styled';

export const Auth = () => {
  const [index, setIndex] = useState(false);
  const navigate = useNavigate();

  const toggleIndex = () => setIndex(prevState => !prevState);

  const { user, signInWithGoogle, signInWithGithub } = useUserContext();

  useEffect(() => {
    if (user) navigate('/');
  }, [navigate, user]);

  return (
    <Container>
      {!index ? <SignIn /> : <SignUp />}
      <div>
        <span>OR</span>
      </div>
      <Btn onClick={signInWithGoogle}>Continue with Google</Btn>
      <Btn onClick={signInWithGithub}>Continue with GitHub</Btn>
      <p onClick={toggleIndex}>
        {!index ? 'New user? Click here ' : 'Already have an acount?'}
      </p>
    </Container>
  );
};
