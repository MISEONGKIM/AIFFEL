import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../../stores/hooks';
import { loginInfo } from '../../stores/slice/loginSlice';

const Div = styled.div`
  width: 100px;
  background-color: ${({ isHovering }: { isHovering: boolean }) =>
    isHovering ? 'blue' : 'white'};
`;
export const UserInfo = () => {
  const user = useAppSelector(loginInfo);
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <Div
      isHovering={isHovering}
      onClick={() => {
        navigate('/profile');
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {user.username}
    </Div>
  );
};
