import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '.';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  Timestamp,
} from 'firebase/firestore';
import { RootState } from '../../store';

export const getDay = createAsyncThunk<any, undefined, { state: RootState }>(
  'day',
  async (_, thunkAPI) => {
    try {
      const { uid } = thunkAPI.getState().auth;
      const today = new Date(
        Timestamp.now().seconds * 1000
      ).toLocaleDateString();
      const docRef = collection(db, 'users', uid, 'Days');
      const q = query(docRef, where('date', '==', today));
      const querySnapshot = await getDocs(q);
      const days: any = [];
      querySnapshot.forEach((doc) => {
        days.push(doc.data());
      });

      return days;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue({ err });
    }
  }
);
