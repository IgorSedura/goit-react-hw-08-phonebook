import { Header, Link } from './NavBarStyles';

const NavBar = () => {
  return (
    <Header>
      <Link to="/"> Home</Link>
      <nav>
        <div>
          <Link to="/register" end>
            Register
          </Link>

          <Link to="/login">Log In </Link>
        </div>
      </nav>
    </Header>
  );
};

export default NavBar;
