import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RequestStatus } from '../api/common';
import { ButtonBlack } from '../components/common/buttons';
import { InputMiddle } from '../components/common/inputs';
import { idPlaceholder, passwordPlaceholder } from '../constants/placeholder';
import {
  emailValidationMsg,
  passwordValidationMsg,
} from '../constants/validtaion';
import { useAppDispatch } from '../stores/hooks';
import { getLogin } from '../stores/slice/loginSlice';
import { emailValidation, passwordValidation } from '../utils/validation';
const OutDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const InDiv = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
`;
const Text = styled.p`
  color: red;
`;

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [infoMessage, setInfomessage] = useState('');
  const disabledButton = !(
    infoMessage.length === 0 &&
    emailValidation(email) &&
    passwordValidation(password)
  );

  const onChangeEmail = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      setEmail((state) => (state = e.target.value));
      setInfomessage(
        (state) =>
          (state = emailValidation(e.target.value) ? '' : emailValidationMsg),
      );
    },
    [],
  );

  const onChangePassword = useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >((e) => {
    setPassword((state) => (state = e.target.value));
    setInfomessage(
      (state) =>
        (state = passwordValidation(e.target.value)
          ? ''
          : passwordValidationMsg),
    );
  }, []);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClick = useCallback(
    (loginParam: Parameters<typeof getLogin>[0]) => async () => {
      const result = await dispatch(getLogin(loginParam));
      result.meta.requestStatus === RequestStatus.SUCCESS && navigate('/forum');
    },
    [dispatch, navigate],
  );

  return (
    <OutDiv>
      <InDiv>
        <InputMiddle
          onChange={onChangeEmail}
          placeholder={idPlaceholder}
          type={'email'}
          value={email}
        />
        <InputMiddle
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
      </InDiv>
    </OutDiv>
  );
};
