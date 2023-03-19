// Utils
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  padding: 0 24px;
  margin: 50px auto 223px;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    margin: 40px auto 188px;
  }

  @media screen and (min-width: 1020px) {
    min-width: 1020px;
    padding: 0;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 210px;
  }
`;
