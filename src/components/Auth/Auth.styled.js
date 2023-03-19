// Utils
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Btn = styled.button`
  background-color: #01b0c8;
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  padding: 15px 0 16px;
  width: 350px;

  border-radius: 5px;
  border-color: transparent;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: #a5fd91;
  }

  & + & {
    margin-top: 11px;
  }
`;
