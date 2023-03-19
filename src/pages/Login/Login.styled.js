// Utils
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  margin: 10px auto;

  @media screen and (min-width: 480px) {
    margin: 20px auto;
  }

  @media screen and (min-width: 768px) {
    margin: 40px auto;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    margin: 200px auto;
  }
`;

export const Img = styled.img`
  object-fit: cover;
  object-position: 80% 0%;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    max-width: 50%;
  }

  @media screen and (min-width: 1020px) {
    max-width: 60%;
  }

  @media screen and (min-width: 1440px) {
    max-width: 100%;
  }
`;
