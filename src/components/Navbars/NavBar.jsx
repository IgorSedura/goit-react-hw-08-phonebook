import { Header, Link, Text, Div } from './NavBarStyles';

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
        {!isLogin && (
          <>
            <div>
              <Link to="/"> Home</Link>
            </div>
            <div>
              <Link to="/register" end>
                Register
              </Link>
              <Link to="/login">Log In </Link>
            </div>
          </>
        )}
      </nav>

      {isLogin && (
        <Div>
          <Text>
            Welcom <b>{name}</b>
          </Text>
          <Link onClick={onLogout}>Logout</Link>
        </Div>
      )}
    </Header>
  );
};

export default NavBar;
