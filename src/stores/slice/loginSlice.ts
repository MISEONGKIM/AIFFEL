import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface LoginParamType {
  email: string;
  password: string;
}
const postLogin = createAsyncThunk(
  'login/postLoginStatus',
  async (loginParam: LoginParamType) => {
    // const response = await userAPI.fetchById(userId);
    // return response.data;
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
    builder.addCase(postLogin.fulfilled, (state, action) => {});
  },
});

export const {} = loginSlice.actions;

export const loginInfo = (state: RootState) => state.login.loginInfo;

export default loginSlice.reducer;
