// Utils
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Greeting = styled.p`
  line-height: 19px;

  color: #2d3748;

  margin-bottom: 2px;
`;

export const Login = styled.h1`
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;

  color: #1a202c;

  margin-bottom: 24px;
`;

export const Form = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;

  margin-bottom: 27px;
`;

export const Label = styled.label`
  line-height: 19px;

  color: #4a5568;

  margin-bottom: 11px;

  & > input {
    margin-top: 11px;
  }
`;

export const Input = styled.input`
  padding: 17px 0 17px 20px;
  width: 100%;

  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  outline: none;

  font-size: 14px;
  line-height: 16px;
  color: #2d3748;

  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: 1px solid #a5fd91;
  }

  &:not(:placeholder-shown) {
    border: 1px solid #01b0c8;
  }
`;

export const Btn = styled.button`
  background-color: #a5fd91;
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  padding: 15px 0 16px;

  border-radius: 5px;
  border-color: transparent;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: 1px solid #01b0c8;
  }
`;

export const PswrdReset = styled.p`
  font-size: 14px;
  line-height: 16px;

  color: #2c5282;

  margin-bottom: 27px;
`;
