import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from '@reduxjs/toolkit';
import { RequestStatus } from '../../api/common';
import { getLoginApi, type LoginParamType } from '../../api/loginApi';
import { infoAlert } from '../../utils/alert';
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
  requestStatus: RequestStatus;
  loginInfo: LoginInfo;
  error: SerializedError;
}

const initialState: LoginState = {
  requestStatus: RequestStatus.LOADING,
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
        state.requestStatus = RequestStatus.LOADING;
      })
      .addCase(getLogin.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.SUCCESS;

        state.loginInfo = {
          token: 'aaa',
          username: action.payload[0].username,
        };
      })
      .addCase(getLogin.rejected, (state, action) => {
        state.requestStatus = RequestStatus.FAILURE;
        state.error = action.error;
        infoAlert({ message: action.error.message });
      });
  },
});
export const loginInfo = (state: RootState) => state.login.loginInfo;
export const loginState = (state: RootState) => state.login.requestStatus;
export const loginError = (state: RootState) => state.login.error;

export default loginSlice.reducer;
