import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getLoginApi, type LoginParamType } from '../../api/loginApi';
import { RootState } from '../store';

export const getLogin = createAsyncThunk(
  'login/getLoginStatus',
  async (loginParam: LoginParamType) => {
    const response = await getLoginApi(loginParam);
    return response.data;
  },
);

interface LoginInfo {
  token: string;
  username: string;
}
interface LoginState {
  loginInfo: LoginInfo | {};
}

const initialState: LoginState = {
  loginInfo: {},
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLogin.fulfilled, (state, action) => {});
  },
});

export const {} = loginSlice.actions;

export const loginInfo = (state: RootState) => state.login.loginInfo;

export default loginSlice.reducer;
