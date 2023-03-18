// Core
import { AiOutlineArrowLeft } from 'react-icons/ai';

// Styles
import { StyledLink } from './BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <AiOutlineArrowLeft size="24" /> {children}
    </StyledLink>
  );
};
