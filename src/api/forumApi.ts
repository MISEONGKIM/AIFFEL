import axios from 'axios';
import { DEFAULT_URL } from './common';

export interface ForumParamType {
  page: number;
  limit: number;
}

export const getForumApi = async (forumParam: ForumParamType) => {
  const response = await axios.get(`${DEFAULT_URL}/forum`, {
    params: forumParam,
  });

  return response;
};
