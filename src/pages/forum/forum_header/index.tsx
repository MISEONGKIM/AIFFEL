import styled from 'styled-components';
import { UserInfo } from './user_info';

const Div = styled.div``;
export const ForumHeader = () => {
  return (
    <div>
      <img src="img/aiffel_logo.png" alt="로고" />
      <UserInfo />
    </div>
  );
};
