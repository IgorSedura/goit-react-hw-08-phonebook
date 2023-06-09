import { createSlice } from '@reduxjs/toolkit';
import { singup, login, logout } from './auth-operations';
import { current } from 'services/auth';

const initialState = {
  user: { name: null, email: null },
  isLogin: false,
  token: '',
  loading: false,
  error: null,
  isRefreshing: false,
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
    [login.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [login.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    },
    [login.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [logout.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [logout.fulfilled]: store => {
      store.loading = false;
      store.user = {};
      store.token = '';
      store.isLogin = false;
    },
    [logout.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [current.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [current.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload;

      store.isLogin = true;
    },
    [current.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
      store.token = '';
    },
  },
});

export default authSlise.reducer;
