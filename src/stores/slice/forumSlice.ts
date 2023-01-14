import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from '@reduxjs/toolkit';
import { RequestStatus } from '../../api/common';
import { ForumParamType, getForumApi } from '../../api/forumApi';
import { RootState } from '../store';

export const getForumList = createAsyncThunk(
  'login/getForumListStatus',
  async (forumParam: ForumParamType) => {
    const response = await getForumApi(forumParam);
    return response.data;
  },
);

interface Tag {
  name: string;
  color: string;
}
interface ForumInfo {
  id: number;
  title: string;
  content: string;
  isLiked: boolean;
  tag: Tag;
}
interface ForumState {
  requestStatus: RequestStatus;
  forumList: ForumInfo[];
  error: SerializedError;
}

const initialState: ForumState = {
  requestStatus: RequestStatus.LOADING,
  forumList: [],
  error: {},
};

export const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getForumList.pending, (state) => {
        state.requestStatus = RequestStatus.LOADING;
      })
      .addCase(getForumList.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.SUCCESS;
        console.log(action.payload);
        state.forumList = action.payload;
      })
      .addCase(getForumList.rejected, (state, action) => {
        state.requestStatus = RequestStatus.FAILURE;
        state.error = action.error;
      });
  },
});
export const forumList = (state: RootState) => state.forum.forumList;
export const forumState = (state: RootState) => state.forum.requestStatus;
export const forumError = (state: RootState) => state.forum.error;

export default forumSlice.reducer;
