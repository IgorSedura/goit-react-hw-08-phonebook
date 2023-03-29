import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth-slise';

import contactsReducers from './contactsSlise';
import filterReducers from './filterSlise';

const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducers,
    filter: filterReducers,
  },
});

export default store;
