// Core
// import { useSearchParams } from 'react-router-dom';

// Styles
import { Wrapper, Input, Icon } from './SearchBox.styled';

export const SearchBox = () => {
  return (
    <Wrapper>
      <Icon />
      <Input
        type="text"
        debounceTimeout={300}
        placeholder="Filter by name..."
      />
    </Wrapper>
  );
};

export default SearchBox;
