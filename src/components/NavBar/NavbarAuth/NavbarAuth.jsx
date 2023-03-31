import { Link } from '../NavBarStyles';

export const NavbarAuth = () => {
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
