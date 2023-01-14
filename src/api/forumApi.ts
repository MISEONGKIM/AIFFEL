import axios from 'axios';
import { DEFAULT_URL } from './common';

export interface ForumParamType {
  _page: number;
  _limit: number;
}

export const getForumApi = async (forumParam: ForumParamType) => {
  const response = await axios.get(`${DEFAULT_URL}/forum`, {
    params: forumParam,
  });

  return response;
};
