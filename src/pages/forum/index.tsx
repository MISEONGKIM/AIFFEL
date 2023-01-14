import styled from 'styled-components';
import { ForumBody } from './forum_body';
import { ForumHeader } from './forum_header';

const Div = styled.div``;
export const ForumPage = () => {
  return (
    <div>
      <ForumHeader /> <ForumBody />
    </div>
  );
};
