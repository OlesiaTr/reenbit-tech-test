// Core
import { Link } from 'react-router-dom';

// Utils
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  font-family: 'Karla';
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;

  color: #000000;
  text-decoration: none;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  margin-bottom: 77px;

  @media screen and (min-width: 768px) {
    margin-bottom: 31px;
  }

  :hover {
    color: #01b0c8;
  }
`;
