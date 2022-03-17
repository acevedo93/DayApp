import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login/login';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { Home } from '../pages/Home';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<PrivateRoute component={<Home />} />} />
        <Route path="/login" element={<PublicRoute component={<Login />} />} />
      </Routes>
    </BrowserRouter>
  );
};
