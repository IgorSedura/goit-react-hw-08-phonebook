import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Container } from './AppStyled';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { current } from 'services/auth';

import { Home } from 'Pages/Home/home';
import useAuth from 'shared/useAuth';
import { Copyright } from './Copyright/Copyright';

const NavBar = lazy(() => import('./Navbars/NavBar'));
const Contacts = lazy(() => import('./Contacts/Contacts'));
const LoginPage = lazy(() => import('Pages/LogIn/LoginPage'));
const RegisterPage = lazy(() => import('Pages/Register/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    !isRefreshing && (
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
        <Copyright />
      </Container>
    )
  );
};
