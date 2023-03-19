// Utils
import styled from 'styled-components';

export const Btn = styled.button`
  background-color: #01b0c8;
  color: #a5fd91;
  font-weight: 700;
  font-size: 14px;
  line-height: 12px;
  width: 120px;

  padding: 10px 0px 11px;
  margin-bottom: 42px;

  border-radius: 5px;
  border-color: transparent;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: #a5fd91;
    color: #01b0c8;
  }

  @media screen and (min-width: 480px) {
    font-size: 14px;
    line-height: 12px;
    width: 120px;
    padding: 10px 0px 11px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 19px;
    width: 150px;

    padding: 15px 0 16px;
    margin-bottom: 46px;
  }

  @media screen and (min-width: 1020px) {
    width: 200px;
  }
`;
