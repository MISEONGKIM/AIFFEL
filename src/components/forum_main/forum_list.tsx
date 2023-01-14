import { useNavigate } from 'react-router-dom';
import { ForumInfo } from '../../stores/slice/forumSlice';
import { ForumListItem } from './forum_list_item';

export const ForumList = ({ list }: { list: ForumInfo[] }) => {
  const navigate = useNavigate();
  const onClick = (id: number) => {
    navigate(`/forum/${id}`);
  };

  if (list.length === 0) <div>데이터가 없습니다.</div>;
  return (
    <ul>
      {list.map((data) => (
        <ForumListItem data={data} onClick={onClick} />
      ))}
    </ul>
  );
};
