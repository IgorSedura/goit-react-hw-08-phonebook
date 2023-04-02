import LoginForm from 'components/LoginForm/loginForm';
import { useDispatch, useSelector } from 'react-redux';
import { useToast } from '@chakra-ui/react';
import { login } from 'redux/auth/auth-operations';
import { getAuthError } from 'redux/auth/auth-selector';
// import toast, { Toaster } from 'react-hot-toast';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, statusText } = useSelector(getAuthError);

  const onLogin = data => {
    dispatch(login(data));
  };

  const toast = useToast();
  const Click = () => {
    if (status) {
      toast({
        title: 'Oops',
        description: `${statusText}`,
        status: 'error',
        duration: 9000,
        position: 'top',
        isClosable: true,
      });
    }
  };

  return (
    <>
      <div>
        <LoginForm onSubmit={onLogin} onClick={Click()} />
      </div>
    </>
  );
};

export default LoginPage;
