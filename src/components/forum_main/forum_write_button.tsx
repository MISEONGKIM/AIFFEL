import { useNavigate } from 'react-router-dom';
import { AddButton } from '../common/buttons/add_button';

export const ForumWriteButton = () => {
  const navigate = useNavigate();
  const onClick = () => navigate('/forum/write');
  return <AddButton onClick={onClick} />;
};
