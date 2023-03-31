import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'services/auth';

export const singup = createAsyncThunk(
  'auth/singup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.singup(data);
      return result;
    } catch ({ response }) {
      const { status, statusText } = response;

      const error = {
        status,
        statusText,
      };
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch ({ response }) {
      const { status, statusText } = response;

      const error = {
        status,
        statusText,
      };
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.logout();
      return result;
    } catch ({ response }) {
      const { status, statusText } = response;

      const error = {
        status,
        statusText,
      };
      return rejectWithValue(error);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await api.getCurrent(auth.token);
      return result;
    } catch ({ response }) {
      const { status, statusText } = response;

      const error = {
        status,
        statusText,
      };
      return rejectWithValue(error);
    }
  }
);
