// Core
import { useSearchParams } from 'react-router-dom';

// Styles
import { Wrapper, Input, Icon } from './SearchBox.styled';

export const SearchBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const characterName = searchParams.get('name') ?? '';

  const updateQueryStr = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };
  return (
    <Wrapper>
      <Icon />
      <Input
        type="text"
        debounceTimeout={300}
        value={characterName}
        placeholder="Filter by name..."
        onChange={e => updateQueryStr(e.target.value)}
      />
    </Wrapper>
  );
};

export default SearchBox;
