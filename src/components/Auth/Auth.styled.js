// Utils
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;

export const Btn = styled.button`
  background-color: #01b0c8;
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  padding: 15px 0 16px;
  width: 300px;

  border-radius: 5px;
  border-color: transparent;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: #004a4b;
  }

  & + & {
    margin-top: 11px;
  }

  @media screen and (min-width: 1020px) {
    width: 350px;
  }
`;

export const Divider = styled.div`
  width: 300px;
  display: flex;
  font-size: 12px;
  font-weight: 500;
  margin: 0 auto 27px;

  ::before,
  ::after {
    content: '';
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    flex: 1;
    height: 7px;
  }

  @media screen and (min-width: 1020px) {
    width: 350px;
  }
`;

export const Span = styled.span`
  text-align: center;
  flex: 0.2 0 auto;
`;

export const P = styled.p`
  font-weight: 500;

  margin-top: 50px;
  cursor: pointer;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: #c23501;
  }
`;
