import { configureStore } from '@reduxjs/toolkit';
import forumSlice from './slice/forumSlice';
import loginSlice from './slice/loginSlice';

export const store = configureStore({
  reducer: {
    login: loginSlice,
    forum: forumSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
