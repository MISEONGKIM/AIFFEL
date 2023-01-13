import { createBrowserRouter } from 'react-router-dom';
import { LoginPage, ErrorPage } from './pages';
import { ForumPage, ForumDetailPage } from './pages/forum';
import { ProfilePage } from './pages/profile';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/forum/{id}',
    element: <ForumDetailPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/forum',
    element: <ForumPage />,
    errorElement: <ErrorPage />,
  },
]);
