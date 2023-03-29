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

const LoginArea = () => {
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
        {/* <ThemeSelector /> */}
        <Box p={4}>
          <LoginHeader />
          <LoginForm />
        </Box>
      </Box>
    </Flex>
  );
};

const LoginHeader = () => {
  return (
    <Box textAlign="center">
      <Heading> Register Form</Heading>
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
  const { name, email, password } = state;

  return (
    <Box align="flex-start" my={8} textAlign="left">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>User name</FormLabel>
          <Input
            onChange={handleChange}
            value={name}
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Email address</FormLabel>
          <Input
            value={email}
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email address"
            onChange={handleChange}
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
          Sign Up
        </Button>
      </form>
    </Box>
  );
};

export default LoginArea;
