import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login/login';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { Home } from '../pages/Home';
import { useAuth } from '../hooks/useAuth';
import { LoginSuccess } from '../pages/Login/LoginSuccess';
import { Center, Spinner } from '@chakra-ui/react';

export const Navigation = () => {
  const [isAuth, loading] = useAuth();

  if (loading) {
    return (
      <Center height="100vh">
        <Spinner size="lg" color="accent.200" />
      </Center>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home/success"
          element={
            <PrivateRoute isAuth={isAuth} component={<LoginSuccess />} />
          }
        />

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
