// Utils
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export const Img = styled.img`
  display: inline-block;
  border-radius: 50%;
  border: 5px solid #f2f2f7;
  height: 148px;

  margin-bottom: 34px;

  @media screen and (min-width: 768px) {
    height: 300px;
    margin-bottom: 16px;
  }
`;

export const Name = styled.h1`
  font-size: 32px;
  line-height: 38px;
  font-weight: 400;

  color: #081f32;

  margin-bottom: 34px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 56px;

    margin-bottom: 48px;
  }
`;

export const Info = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: 0.15px;

  color: #8e8e93;
  text-align: start;

  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    text-align: center;

    margin-bottom: 48px;
  }
`;

export const List = styled.ul`
  text-align: start;

  margin: 0 32px 0 40px;

  @media screen and (min-width: 768px) {
    max-width: 413px;

    margin: 0 auto;
  }
`;

export const Item = styled.li`
  padding: 9px 0 12px 0px;

  border-bottom: 1px solid rgba(33, 33, 33, 0.08);
`;

export const InfoTitles = styled.h3`
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.15px;

  color: #081f32;
`;

export const InfoDesc = styled.p`
  font-size: 14px;
  line-height: 143%;
  letter-spacing: 0.25px;
  text-transform: capitalize;

  color: #6e798c;
`;
