import { useDispatch } from 'react-redux';
import { logOut } from '../../services/firebase/auth';

export const Home = () => {
  const dispath = useDispatch();
  const handleLogout = () => {
    dispath(logOut());
  };
  return (
    <div>
      <h1>home</h1>
      <button onClick={handleLogout}>Salir</button>
    </div>
  );
};
