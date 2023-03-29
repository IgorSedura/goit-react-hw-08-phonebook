import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'services/auth';

export const singup = createAsyncThunk(
  'auth/singup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.singup(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
