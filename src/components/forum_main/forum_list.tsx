import { ForumInfo } from '../../stores/slice/forumSlice';
import { ForumListItem } from './forum_list_item';

export const ForumList = ({ list }: { list: ForumInfo[] }) => {
  if (list.length === 0) <div>데이터가 없습니다.</div>;
  return (
    <ul>
      {list.map((data) => (
        <ForumListItem {...data} />
      ))}
    </ul>
  );
};
