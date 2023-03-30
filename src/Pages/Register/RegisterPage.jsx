import RegisterForm from 'components/RegisterForm/registerForm';
import { useDispatch, useSelector } from 'react-redux';
import { singup } from 'redux/auth/auth-operations';
import { getAuthError, isAuth } from 'redux/auth/auth-selector';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, statusText } = useSelector(getAuthError);
  const isLogin = useSelector(isAuth);

  const onRegister = data => {
    dispatch(singup(data));
  };
  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <RegisterForm onSubmit={onRegister} />
      {status && toast.error(`oops ${statusText}`)}
      <Toaster />
    </div>
  );
};

export default RegisterPage;