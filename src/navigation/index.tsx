import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login/login';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { Home } from '../pages/Home';
import { useAuth } from '../hooks/useAuth';

export const Navigation = () => {
  const [isAuth, loading] = useAuth();

  if (loading) {
    return <div>Cargando</div>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={<PrivateRoute isAuth={isAuth} component={<Home />} />}
        />
        <Route
          path="/login"
          element={<PublicRoute isAuth={isAuth} component={<Login />} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
