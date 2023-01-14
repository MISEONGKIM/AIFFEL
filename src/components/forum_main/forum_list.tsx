import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ForumInfo } from '../../stores/slice/forumSlice';
import { ForumListItem } from './forum_list_item';
const Ul = styled.ul`
  width: 500px;
`;
export const ForumList = ({ list }: { list: ForumInfo[] }) => {
  const navigate = useNavigate();
  const onClick = (id: number) => {
    navigate(`/forum/${id}`);
  };

  if (list.length === 0) <div>데이터가 없습니다.</div>;
  return (
    <Ul>
      {list.map((data) => (
        <ForumListItem key={data.id} data={data} onClick={onClick} />
      ))}
    </Ul>
  );
};
