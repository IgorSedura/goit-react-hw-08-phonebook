import { createSlice } from '@reduxjs/toolkit';
import { singup } from './auth-operations';

const initialState = {
  user: {},
  isLogin: false,
  token: '',
  loading: false,
  error: null,
};

const authSlise = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [singup.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [singup.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    },
    [singup.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default authSlise.reducer;
