import styled from 'styled-components';
import { Loading } from '../../components/common/loading';
import { ForumBody } from './forum_body';
import { ForumHeader } from './forum_header';

const Div = styled.div``;
export const ForumPage = () => {
  const isLoading = false;
  return <div>{isLoading ? <Loading /> : [<ForumHeader />]}</div>;
};
