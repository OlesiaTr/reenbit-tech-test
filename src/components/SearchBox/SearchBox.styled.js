// Utils
import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';
import { DebounceInput } from 'react-debounce-input';

export const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;

  width: 100%;
  margin: 0 auto;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 61px;
  }
`;

export const Input = styled(DebounceInput)`
  padding: 16px;
  padding-left: 48px;
  width: 100%;

  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  outline: none;

  color: rgba(0, 0, 0, 0.5);
  line-height: 150%;

  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: 1px solid #a5fd91;
  }

  &:not(:placeholder-shown) {
    border: 1px solid #01b0c8;
  }
`;

export const Icon = styled(BiSearchAlt2)`
  position: absolute;
  left: 16px;

  width: 24px;
  height: 24px;

  color: rgba(0, 0, 0, 0.54);
`;
