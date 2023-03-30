import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Container } from './AppStyled';

import { Home } from 'Pages/Home/home';

const NavBar = lazy(() => import('./NavBar/Navbar'));
const Contacts = lazy(() => import('./Contacts/Contacts'));
const LoginPage = lazy(() => import('Pages/LogIn/LoginPage'));
const RegisterPage = lazy(() => import('Pages/Register/RegisterPage'));

export const App = () => {
  return (
    <Container>
      <Suspense>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
