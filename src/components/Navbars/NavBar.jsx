import { Header, Link } from './NavBarStyles';

import useAuth from '../../shared/useAuth';

import { useSelector, useDispatch } from 'react-redux';
import { getUser } from 'redux/auth/auth-selector';
import { logout } from 'redux/auth/auth-operations';

const NavBar = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());
  const isLogin = useAuth();
  return (
    <Header>
      <nav>
        <div>
          <Link to="/register" end>
            Register
          </Link>

          <Link to="/login">Log In </Link>
        </div>

        <Link to="/"> Home</Link>

        {isLogin && (
          <div>
            <span>{name}</span> |
            <button onClick={onLogout} type="button">
              {' '}
              Logout
            </button>
          </div>
        )}
      </nav>
    </Header>
  );
};

export default NavBar;
