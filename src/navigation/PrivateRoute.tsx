import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { authSelector } from '../store/selectors/authSelector';

export interface Props {
  component: any;
  isAuth: boolean;
}

export const PrivateRoute = ({ component, isAuth }: Props) => {
  return isAuth ? component : <Navigate to="/login" />;
};
