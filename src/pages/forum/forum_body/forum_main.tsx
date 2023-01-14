import { useEffect } from 'react';
import { RequestStatus } from '../../../api/common';
import { Loading } from '../../../components/common/loading';
import { ForumList } from '../../../components/forum_main/forum_list';
import { ForumPagination } from '../../../components/forum_main/forum_pagination';
import { ForumWriteButton } from '../../../components/forum_main/forum_write_button';
import { Search } from '../../../components/forum_main/search';
import { useAppDispatch, useAppSelector } from '../../../stores/hooks';
import {
  forumList,
  forumState,
  getForumList,
} from '../../../stores/slice/forumSlice';
import { infoAlert } from '../../../utils/alert';

export const ForumMain = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector(forumList);
  const requestStatus = useAppSelector(forumState);

  const onSearch = (searchText: string) => {
    const result = list.filter((data) => data.title === searchText);
    if (result.length === 0) infoAlert({ message: '검색된 내역이 없습니다.' });
  };
  useEffect(() => {
    dispatch(getForumList({ page: 1, limit: 5 }));
  }, [dispatch]);

  if (requestStatus === RequestStatus.LOADING) return <Loading />;
  return (
    <div>
      <Search onSearch={onSearch} />
      <ForumWriteButton />
      <ForumList list={list} />
      <ForumPagination />
    </div>
  );
};
