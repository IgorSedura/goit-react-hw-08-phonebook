import RegisterForm from 'components/RegisterForm/registerForm';
import { useDispatch, useSelector } from 'react-redux';
import { singup } from 'redux/auth/auth-operations';
import { getAuthError } from 'redux/auth/auth-selector';
import toast, { Toaster } from 'react-hot-toast';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, statusText } = useSelector(getAuthError);

  const onRegister = data => {
    dispatch(singup(data));
  };

  return (
    <div>
      <Toaster />
      <RegisterForm onSubmit={onRegister} />

      <div>{status && toast.error(`oops ${statusText}`)}</div>
    </div>
  );
};

export default RegisterPage;
