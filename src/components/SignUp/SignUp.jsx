// Core
import { useUserContext } from 'context/userContext';
import { useRef } from 'react';

// Styles
import {
  Container,
  Greeting,
  Login,
  Form,
  Label,
  Input,
  Btn,
} from './SignUp.styled';

export const SignUp = () => {
  const emailRef = useRef();
  const pswrdRef = useRef();
  const { signUp } = useUserContext();

  const onSubmit = e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pswrd = pswrdRef.current.value;

    if (email && pswrd) signUp(email, pswrd);
  };

  return (
    <Container>
      <Greeting>Welcome!</Greeting>
      <Login> Make new account </Login>
      <Form onSubmit={onSubmit}>
        <Label>
          Email
          <Input
            type="email"
            placeholder="example@gmail.com"
            autoComplete="on"
            ref={emailRef}
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            placeholder="********"
            autoComplete="on"
            ref={pswrdRef}
          />
        </Label>
        <Btn type="submit">Sign Up</Btn>
      </Form>
    </Container>
  );
};
