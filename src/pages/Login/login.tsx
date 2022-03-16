import { useDispatch } from 'react-redux';
import { signIn } from '../../services/firebase/auth';

export const Login = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(signIn());
  };
  return (
    <>
      <h1>Login</h1>
      <h2>Ingresa con tu cuenta de google</h2>
      <div>
        <button onClick={handleLogin}> sign up with google</button>
      </div>
    </>
  );
};
