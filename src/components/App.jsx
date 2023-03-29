import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Container } from './AppStyled';

import { Home } from 'Pages/Home/home';

const NavBar = lazy(() => import('./NavBar/Navbar'));

const LogIn = lazy(() => import('Pages/LogIn/logIn'));
const RegisterPage = lazy(() => import('Pages/Register/RegisterPage'));

export const App = () => {
  return (
    <Container>
      <Suspense>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
