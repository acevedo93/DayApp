import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '.';
import { doc, getDoc } from 'firebase/firestore';

export const getDay = createAsyncThunk('day', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const docRef = doc(db, 'users');

    return true;
  } catch (err) {
    return thunkAPI.rejectWithValue({ err });
  }
});
