import axios from 'axios';
import { DEFAULT_URL } from './common';

export interface LoginParamType {
  email: string;
  password: string;
}

export const getLoginApi = async (loginParam: LoginParamType) => {
  const response = await axios.get(`${DEFAULT_URL}/login`, {
    params: loginParam,
  });
  if (response.data.length === 0)
    throw Error('아이디와 비밀번호를 확인해주세요.');
  return response;
};
