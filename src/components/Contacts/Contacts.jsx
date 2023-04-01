import { FormAddContact } from './FormAddConatact/FormAddContact';
import { PhonebookList } from './ContactBookList/ContactBookList';
import { Container } from './ConatactsStyles';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setFilter } from 'redux/filterSlise';
import {
  InputLeftElement,
  InputGroup,
  Input,
  Heading,
  FormLabel,
} from '@chakra-ui/react';

import { getFilterContacts } from 'redux/selector';
import { addContact, removeContact } from 'redux/contacts-operations';
import { Search2Icon } from '@chakra-ui/icons';
import { fetchContacts } from 'redux/contacts-operations';

const Contacts = () => {
  const contacts = useSelector(getFilterContacts);

  const dispatch = useDispatch();
  const filter = useSelector(store => store.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = payload => {
    const action = addContact(payload);
    dispatch(action);
  };

  const onRemoveContact = id => {
    dispatch(removeContact(id));
  };

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <Container>
      <FormAddContact onSubmit={onAddContact} />
      <div>
        <Heading as="h2" size="xl" mb={5}>
          Contacts
        </Heading>

        <FormLabel>Find constacts by name</FormLabel>
        <InputGroup>
          <InputLeftElement children={<Search2Icon color="teal" />} />
          <Input
            variant="filled"
            width={250}
            onChange={onSetFilter}
            value={filter}
            type="text"
            boxShadow="md"
            marginBottom={5}
          />
        </InputGroup>

        <PhonebookList contacts={contacts} removeContact={onRemoveContact} />
      </div>
    </Container>
  );
};

export default Contacts;
