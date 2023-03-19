// Core
import { useState } from 'react';
import { useUserContext } from 'context/userContext';

// Components
import { SignIn } from 'components/SignIn';
import { SignUp } from 'components/SignUp';

// Styles
import { Container } from './Auth.styled';

export const Auth = () => {
  const [index, setIndex] = useState(false);

  const toggleIndex = () => setIndex(prevState => !prevState);

  const { signInWithGoogle, signInWithGithub } = useUserContext();

  return (
    <Container>
      {!index ? <SignIn /> : <SignUp />}
      <div>
        <span>OR</span>
      </div>
      <button onClick={signInWithGoogle}>Continue with Google</button>
      <button onClick={signInWithGithub}>Continue with GitHub</button>
      <p onClick={toggleIndex}>
        {!index ? 'New user? Click here ' : 'Already have an acount?'}
      </p>
    </Container>
  );
};
