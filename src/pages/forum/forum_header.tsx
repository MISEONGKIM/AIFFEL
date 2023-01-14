import styled from 'styled-components';
import { UserInfo } from '../../components/forum_header';

const Div = styled.div``;
export const ForumHeader = () => {
  return (
    <div>
      <img src="img/aiffel_logo.png" alt="로고" />
      <UserInfo />
    </div>
  );
};
