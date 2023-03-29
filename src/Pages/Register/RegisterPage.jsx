import LoginForm from 'components/RegisterForm/register';
import { useDispatch } from 'react-redux';
import { singup } from 'redux/auth/auth-operations';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const onRegister = data => {
    dispatch(singup(data));
  };
  return (
    <div>
      <LoginForm onSubmit={onRegister} />
    </div>
  );
};

export default RegisterPage;
