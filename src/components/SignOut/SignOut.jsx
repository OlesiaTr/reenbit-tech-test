// Core
import { useUserContext } from 'context/userContext';

// Styles
import { Btn } from './SignOut.styled';

export const SignOut = () => {
  const { signOutUser } = useUserContext();

  return (
    <Btn type="button" onClick={signOutUser}>
      Sign Out
    </Btn>
  );
};
