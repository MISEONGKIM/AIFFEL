import styled from 'styled-components';
import { ForumInfo } from '../../stores/slice/forumSlice';

const Tag = styled.div`
  background-color: ${({ color }: { color: string }) => color};
  width: 50px;
`;
export const ForumListItem = ({
  data,
  onClick,
}: {
  data: ForumInfo;
  onClick: (id: number) => void;
}) => {
  return (
    <li onClick={() => onClick(data.id)}>
      <p>{data.title}</p>
      <div>
        {data.content.length < 30
          ? data.content
          : data.content.slice(0, 30) + '...'}
      </div>
      <div>등록시간</div>
      <Tag color={data.tag.color}>{data.tag.name}</Tag>
    </li>
  );
};
