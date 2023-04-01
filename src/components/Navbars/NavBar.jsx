import { Header, Link, Text } from './NavBarStyles';

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
        <Link to="/"> Home</Link>

        <div>
          {!isLogin && (
            <>
              <Link to="/register" end>
                Register
              </Link>

              <Link to="/login">Log In </Link>
            </>
          )}
        </div>

        {isLogin && (
          <div>
            <Text>
              Welcom <b>{name}</b>
            </Text>
            <Link onClick={onLogout}>Logout</Link>
          </div>
        )}
      </nav>
    </Header>
  );
};

export default NavBar;
