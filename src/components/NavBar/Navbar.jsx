import { Header, Link } from './NavBarStyles';
import NavbarUser from '../NavbarUser/NavbarUser';
import useAuth from '../../shared/useAuth';
import NavbarAuth from '../NavbarAuth/NavbarAuth';

const NavBar = () => {
  const isLogin = useAuth();
  return (
    <Header>
      <Link to="/"> Home</Link>
      <nav>
        {!isLogin && <NavbarAuth />}
        {isLogin && <NavbarUser />}
      </nav>
    </Header>
  );
};

export default NavBar;
