import LoginForm from 'components/LoginForm/loginForm';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from 'shared/useAuth';
import { login } from 'redux/auth/auth-operations';
import { getAuthError } from 'redux/auth/auth-selector';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, statusText } = useSelector(getAuthError);
  const isLogin = useAuth();
  const onLogin = data => {
    dispatch(login(data));
  };
  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <LoginForm onSubmit={onLogin} />
      {status && toast.error(`oops ${statusText}`)}

      <Toaster />
    </div>
  );
};

export default LoginPage;
