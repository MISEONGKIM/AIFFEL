import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from '@reduxjs/toolkit';
import {
  getLoginApi,
  LoginRequestStatus,
  type LoginParamType,
} from '../../api/loginApi';
import { RootState } from '../store';

export const getLogin = createAsyncThunk(
  'login/getLoginStatus',
  async (loginParam: LoginParamType) => {
    const response = await getLoginApi(loginParam);
    return response.data;
  },
);

interface LoginInfo {
  token?: string;
  username?: string;
}

interface LoginState {
  requestStatus: LoginRequestStatus;
  loginInfo: LoginInfo;
  error: SerializedError;
}

const initialState: LoginState = {
  requestStatus: LoginRequestStatus.LOADING,
  loginInfo: {},
  error: {},
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLogin.pending, (state) => {
        state.requestStatus = LoginRequestStatus.LOADING;
      })
      .addCase(getLogin.fulfilled, (state, action) => {
        state.requestStatus = LoginRequestStatus.SUCCESS;
        console.log(action.payload);
        state.loginInfo = {
          token: 'aaa',
          username: action.payload[0].username,
        };
      })
      .addCase(getLogin.rejected, (state, action) => {
        state.requestStatus = LoginRequestStatus.FAILURE;
        state.error = action.error;
      });
  },
});
export const loginInfo = (state: RootState) => state.login.loginInfo;
export const loginState = (state: RootState) => state.login.requestStatus;
export const loginError = (state: RootState) => state.login.error;

export default loginSlice.reducer;
