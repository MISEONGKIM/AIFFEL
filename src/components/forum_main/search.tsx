import { useState, useCallback } from 'react';
import { searchPlaceholder } from '../../constants/placeholder';
import { ButtonBlack } from '../common/buttons';
import { InputLarge } from '../common/inputs';

export const Search = () => {
  const [searchText, setSearchText] = useState('');
  const onChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      setSearchText((state) => (state = e.target.value));
    },
    [],
  );
  return (
    <div>
      <InputLarge
        placeholder={searchPlaceholder}
        type={'search'}
        value={searchText}
        onChange={onChange}
      />
      <ButtonBlack
        disabled={false}
        text={''}
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </div>
  );
};
