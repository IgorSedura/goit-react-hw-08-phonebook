import { Header, Link } from './NavBarStyles';
import NavbarUser from './NavbarUser/NavbarUser';
import useAuth from 'shared/useAuth';

const NavbarAuth = () => {
  return (
    <nav>
      <div>
        <Link to="/register" end>
          Register
        </Link>

        <Link to="/login">Log In </Link>
      </div>
    </nav>
  );
};

const Navbar = () => {
  const isLogin = useAuth();
  return (
    <Header>
      <Link to="/"> Home</Link>
      {!isLogin && <NavbarAuth />}
      {isLogin && <NavbarUser />}
    </Header>
  );
};

export default Navbar;
