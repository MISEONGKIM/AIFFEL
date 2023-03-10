import { useCallback, useEffect, useState } from 'react';
import { RequestStatus } from '../../../api/common';
import { Loading } from '../../../components/common/loading';
import { ForumList } from '../../../components/forum_main/forum_list';
import { ForumPagination } from '../../../components/forum_main/forum_pagination';
import { ForumWriteButton } from '../../../components/forum_main/forum_write_button';
import { Search } from '../../../components/forum_main/search';
import { useAppDispatch, useAppSelector } from '../../../stores/hooks';
import {
  ForumInfo,
  forumList,
  forumState,
  getForumList,
} from '../../../stores/slice/forumSlice';
import { infoAlert } from '../../../utils/alert';

export const ForumMain = () => {
  const [page, setPage] = useState(1);
  const [searchList, setSearchList] = useState<ForumInfo[]>([]);
  const dispatch = useAppDispatch();
  const list = useAppSelector(forumList);
  const requestStatus = useAppSelector(forumState);

  const onSearch = (searchText: string) => {
    const result = list.filter((data) => data.title === searchText);
    if (result.length === 0) {
      infoAlert({ message: '검색된 내역이 없습니다.' });
      return;
    }
    setSearchList(result);
  };
  const onReflash = () => {
    setSearchList(list);
  };
  const onClickPage = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    dispatch(getForumList({ _page: page, _limit: 5 }));
  }, [dispatch, page]);

  useEffect(() => {
    setSearchList(list);
  }, [list]);

  if (requestStatus === RequestStatus.LOADING) return <Loading />;
  return (
    <div>
      <Search onSearch={onSearch} onReflash={onReflash} />
      <ForumWriteButton />
      <ForumList list={searchList} />
      <ForumPagination onClick={onClickPage} />
    </div>
  );
};
