import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { authSelector } from '../store/selectors/authSelector';

export interface Props {
  component: any;
  isAuth: boolean;
}

export const PublicRoute = ({ component, isAuth }: Props) => {
  return !isAuth ? component : <Navigate to="/home" />;
};
