// Utils
import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 312px);
  justify-content: center;
  gap: 32px;

  @media screen and (min-width: 1020px) {
    grid-template-columns: repeat(4, 240px);
    gap: 24px 20px;
  } ;
`;

export const CardWrapper = styled.li`
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  > a {
    text-decoration: none;
  }
`;

export const Img = styled.img`
  height: auto;
  width: 100%;

  object-fit: cover;
  object-position: 50% 10%;

  @media screen and (min-width: 768px) {
    height: 168px;
  }
`;

export const InfoWrapper = styled.div`
  padding: 12px 16px;
`;

export const Name = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0.15px;
`;

export const Species = styled.p`
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.25px;

  color: rgba(0, 0, 0, 0.6);
`;
