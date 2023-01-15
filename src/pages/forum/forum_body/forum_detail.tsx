import { useParams } from 'react-router-dom';

export const ForumDetail = () => {
  const param = useParams();
  return <div>ForumDetail{param.id}</div>;
};
