import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../stores/hooks';
import { loginInfo } from '../stores/slice/loginSlice';

export const ProtectedRoute = ({ children }: { children: ReactElement }) => {
  const user = useAppSelector(loginInfo);
  if (!user.token) {
    return <Navigate to="/" />;
  }
  return children;
};
