import RegisterForm from 'components/RegisterForm/registerForm';
import { useDispatch, useSelector } from 'react-redux';
import { singup } from 'redux/auth/auth-operations';
import { getAuthError } from 'redux/auth/auth-selector';
import { useToast } from '@chakra-ui/react';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, statusText } = useSelector(getAuthError);

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

  const onRegister = data => {
    dispatch(singup(data));
  };

  return (
    <div>
      <RegisterForm onSubmit={onRegister} onClick={Click()} />
    </div>
  );
};

export default RegisterPage;
