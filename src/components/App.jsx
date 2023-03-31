import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Container } from './AppStyled';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { current } from 'redux/auth/auth-operations';

import { Home } from 'Pages/Home/home';

const NavBar = lazy(() => import('./NavBar/NavBar'));
const Contacts = lazy(() => import('./Contacts/Contacts'));
const LoginPage = lazy(() => import('Pages/LogIn/LoginPage'));
const RegisterPage = lazy(() => import('Pages/Register/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <Container>
      <Suspense>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
};
