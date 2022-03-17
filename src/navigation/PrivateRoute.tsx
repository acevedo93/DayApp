import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { authSelector } from '../store/selectors/authSelector';

export interface Props {
  component: any;
}

export const PrivateRoute = ({ component }: Props) => {
  const isAuth = useSelector(authSelector);
  return isAuth ? component : <Navigate to="/login" />;
};
