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
} from './SignIn.styled';

export const SignIn = () => {
  const emailRef = useRef();
  const pswrdRef = useRef();
  const { signIn } = useUserContext();

  const onSubmit = e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pswrd = pswrdRef.current.value;

    if (email && pswrd) signIn(email, pswrd);
  };

  return (
    <Container>
      <Greeting>Welcome back</Greeting>
      <Login> Login to your account </Login>
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
        <Btn type="submit">Sign In</Btn>
      </Form>
    </Container>
  );
};
