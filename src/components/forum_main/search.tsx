import { useState, useCallback } from 'react';
import { searchPlaceholder } from '../../constants/placeholder';
import { infoAlert } from '../../utils/alert';
import { searchValidation } from '../../utils/validation';
import { ButtonBlack } from '../common/buttons';
import { InputLarge } from '../common/inputs';
export const Search = ({
  onSearch,
  onReflash,
}: {
  onSearch: (value: string) => void;
  onReflash: () => void;
}) => {
  const [searchText, setSearchText] = useState('');
  const onChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      setSearchText((state) => (state = e.target.value));
    },
    [],
  );
  const onClick = useCallback(
    (searchText: string) => {
      if (!searchValidation(searchText)) {
        infoAlert({ message: '검색어를 입력해주세요.' });
        return;
      }
      onSearch(searchText);
    },
    [onSearch],
  );

  const onClear = useCallback(() => {
    onReflash();
    setSearchText('');
  }, [onReflash]);

  return (
    <div>
      <InputLarge
        placeholder={searchPlaceholder}
        type={'search'}
        value={searchText}
        onChange={onChange}
      />
      <ButtonBlack text={'검색'} onClick={() => onClick(searchText)} />
      <ButtonBlack text={'검색초기화'} onClick={() => onClear()} />
    </div>
  );
};
