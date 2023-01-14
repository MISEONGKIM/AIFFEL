import styled from 'styled-components';
import { ForumInfo } from '../../stores/slice/forumSlice';

const Tag = styled.div`
  background-color: ${({ color }: { color: string }) => color};
`;
export const ForumListItem = (data: ForumInfo) => {
  return (
    <li>
      <p>{data.title}</p>
      <div>
        {data.content.length < 30
          ? data.content
          : data.content.slice(0, 30) + '...'}
      </div>
      <div>{data.isLiked}</div>
      <Tag color={data.tag.color}>{data.tag.name}</Tag>
    </li>
  );
};
