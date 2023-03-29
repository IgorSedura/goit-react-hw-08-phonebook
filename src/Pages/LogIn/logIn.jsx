import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';

const LogIN = () => {
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
      <Heading> Login to your account</Heading>
    </Box>
  );
};

const LoginForm = () => {
  return (
    <Box align="flex-start" my={8} textAlign="left">
      <form>
        <FormControl mt={4}>
          <FormLabel>Email address</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" />
        </FormControl>

        <Button colorScheme="teal" width="full" mt={4}>
          Log In
        </Button>
      </form>
    </Box>
  );
};

export default LogIN;
