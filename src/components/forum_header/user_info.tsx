import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../stores/hooks';
import { loginInfo } from '../../stores/slice/loginSlice';

export const UserInfo = () => {
  const user = useAppSelector(loginInfo);
  const navigate = useNavigate();
  console.log(user);
  return (
    <div
      onClick={() => {
        navigate('/profile');
      }}
    >
      {user.username}
    </div>
  );
};
