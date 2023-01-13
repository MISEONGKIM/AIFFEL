import { useState } from 'react';
import { ButtonBlack } from '../components/common/buttons';
import { InputLarge } from '../components/common/inputs';
import { useAppDispatch } from '../stores/hooks';
import { getLogin } from '../stores/slice/loginSlice';

const idPlaceholder = '사용자명 또는 이메일 주소';
const passwordPlaceholder = '비밀번호';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onChangeEmail: Parameters<typeof InputLarge>[0]['onChange'] = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword: Parameters<typeof InputLarge>[0]['onChange'] = (
    e,
  ) => {
    setPassword(e.target.value);
  };

  const dispatch = useAppDispatch();
  const onClick = (loginParam: Parameters<typeof getLogin>[0]) => () => {
    dispatch(getLogin(loginParam));
  };

  return (
    <div>
      <InputLarge
        onChange={onChangeEmail}
        placeholder={idPlaceholder}
        type={'email'}
        value={email}
      />
      <InputLarge
        onChange={onChangePassword}
        placeholder={passwordPlaceholder}
        type={'password'}
        value={password}
      />
      <ButtonBlack text={'로그인'} onClick={onClick({ email, password })} />
    </div>
  );
};
