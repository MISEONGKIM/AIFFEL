import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LoginRequestStatus } from '../api/loginApi';
import { ButtonBlack } from '../components/common/buttons';
import { InputLarge } from '../components/common/inputs';
import { idPlaceholder, passwordPlaceholder } from '../constants/placeholder';
import {
  emailValidationMsg,
  passwordValidationMsg,
} from '../constants/validtaion';
import { useAppDispatch, useAppSelector } from '../stores/hooks';
import { getLogin, loginError, loginState } from '../stores/slice/loginSlice';
import { infoAlert } from '../utils/alert';
import { emailValidation, passwordValidation } from '../utils/validation';
const Text = styled.p`
  color: red;
`;

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [infoMessage, setInfomessage] = useState('');
  const [disabledButton, setDisabledButton] = useState(true);
  const setDisabledButtonFor = () => {
    setDisabledButton(
      !(
        infoMessage.length === 0 &&
        emailValidation(email) &&
        passwordValidation(password)
      ),
    );
  };
  const onChangeEmail: Parameters<typeof InputLarge>[0]['onChange'] = (e) => {
    ///useCallback ?
    setEmail((state) => (state = e.target.value));
    setInfomessage(
      (state) =>
        (state = emailValidation(e.target.value) ? '' : emailValidationMsg),
    );
    setDisabledButtonFor();
  };

  const onChangePassword: Parameters<typeof InputLarge>[0]['onChange'] = (
    e,
  ) => {
    setPassword((state) => (state = e.target.value));
    setInfomessage(
      (state) =>
        (state = passwordValidation(e.target.value)
          ? ''
          : passwordValidationMsg),
    );
    setDisabledButtonFor();
  };

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const requestStatus = useAppSelector(loginState);
  const error = useAppSelector(loginError);
  const onClick = (loginParam: Parameters<typeof getLogin>[0]) => async () => {
    await dispatch(getLogin(loginParam));
    if (requestStatus === LoginRequestStatus.FAILURE) {
      ////////////됐다안됐다가함. .ㅠ
      infoAlert({ ...error });
      return;
    }
    requestStatus === LoginRequestStatus.SUCCESS && navigate('/forum');
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
      <ButtonBlack
        disabled={disabledButton}
        text={'로그인'}
        onClick={onClick({ email, password })}
      />
      <Text>{infoMessage}</Text>
    </div>
  );
};
