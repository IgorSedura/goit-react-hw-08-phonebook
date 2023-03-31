import LoginForm from 'components/LoginForm/loginForm';
import { useDispatch, useSelector } from 'react-redux';

import { login } from 'redux/auth/auth-operations';
import { getAuthError } from 'redux/auth/auth-selector';
import toast, { Toaster } from 'react-hot-toast';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, statusText } = useSelector(getAuthError);

  const onLogin = data => {
    dispatch(login(data));
  };

  return (
    <div>
      <LoginForm onSubmit={onLogin} />
      {status && toast.error(`oops ${statusText}`)}

      <Toaster />
    </div>
  );
};

export default LoginPage;
