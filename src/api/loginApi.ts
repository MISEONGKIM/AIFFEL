import axios from 'axios';
const DEFAULT_URL = 'http://127.0.0.1:5000';

export interface LoginParamType {
  email: string;
  password: string;
}

export const getLoginApi = async (loginParam: LoginParamType) => {
  const response = await axios.get(`${DEFAULT_URL}/login`);
  return response;
};
