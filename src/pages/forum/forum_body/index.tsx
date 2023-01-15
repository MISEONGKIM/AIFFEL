import { Routes, Route } from 'react-router-dom';
import { ForumDetail } from './forum_detail';
import { ForumMain } from './forum_main';
import { ForumWrite } from './forum_write';
export const ForumBody = () => {
  return (
    <Routes>
      <Route path="/" element={<ForumMain />} />,
      <Route path="/:id" element={<ForumDetail />} />,
      <Route path="/write" element={<ForumWrite />} />,
    </Routes>
  );
};
