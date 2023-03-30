import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth-selector';

const NavbarUser = () => {
  const { name } = useSelector(getUser);
  return (
    <div>
      <span>{name}</span> |<button type="button"> Logout</button>
    </div>
  );
};

export default NavbarUser;
