import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import { initialState } from './initialState';
import { useState } from 'react';

const LoginHeader = () => {
  return (
    <Box textAlign="center">
      <Heading> Login to your account</Heading>
    </Box>
  );
};

const LoginForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });
  const handleChange = ({ target }) => {
    const { value, name } = target;

    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };
  const { email, password } = state;
  return (
    <Flex
      alignItems="flex-start"
      minHeight="100vh"
      width="full"
      align="center"
      justifyContent="center"
    >
      <Box
        borderWidth={1}
        px={4}
        width="full"
        maxWidth="500px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
      >
        <Box p={4}>
          <LoginHeader />
          <Box align="flex-start" my={8} textAlign="left">
            <form onSubmit={handleSubmit}>
              <FormControl mt={4}>
                <FormLabel>Email address</FormLabel>
                <Input
                  onChange={handleChange}
                  value={email}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  onChange={handleChange}
                  name="password"
                  value={password}
                  type="password"
                  placeholder="Enter your password"
                />
              </FormControl>

              <Button type="submit" colorScheme="teal" width="full" mt={4}>
                Log In
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginForm;
