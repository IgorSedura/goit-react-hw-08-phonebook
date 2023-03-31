import { Header, Link } from './NavBarStyles';
import NavbarUser from '../NavbarUser/NavbarUser';
import useAuth from 'shared/useAuth';
import NavbarAuth from '../NavbarAuth/NavbarAuth';

const NavBar = () => {
  const isLogin = useAuth();
  return (
    <Header>
      <Link to="/"> Home</Link>
      {!isLogin && <NavbarAuth />}
      {isLogin && <NavbarUser />}
    </Header>
  );
};

export default NavBar;
