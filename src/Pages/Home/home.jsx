import {
  Card,
  CardBody,
  Center,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { BsJournalBookmark } from 'react-icons/bs';

export const Home = () => {
  return (
    <>
      <Card mt="1" mb="6">
        <CardBody>
          <Center>
            <Heading mb="5" size="4xl">
              Phonebook
            </Heading>
          </Center>
          <Center mb={4}>
            <BsJournalBookmark size={200} />
          </Center>
          <Center>
            {' '}
            <Heading size="md" mb={2}>
              Simple study web app to store contacts in a cloud.
            </Heading>
          </Center>

          <Center>
            <Text mb={2}>
              Register your account or log in by using email and password, and
              you’ll get personal contacts notebook.
              <br /> Phone book can be accessed from any devices and any
              browsers.
            </Text>
          </Center>
          <Center>
            <Heading size="sm" mb={4}>
              In this application I had used following framework and libraries:
            </Heading>
          </Center>
          <Center>
            <UnorderedList>
              <ListItem>React</ListItem>
              <ListItem>Redux, redux-toolkit</ListItem>
              <ListItem>React-router-dom</ListItem>
              <ListItem>React-persist</ListItem>
              <ListItem>Chakra components</ListItem>
              <ListItem>Axios</ListItem>
            </UnorderedList>
          </Center>
        </CardBody>
      </Card>
    </>
  );
};
