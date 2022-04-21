import firestore from '@react-native-firebase/firestore';
import {createAsyncThunk} from '@reduxjs/toolkit';

import {
  QuerySnapshotDay,
  GetDayResponseService,
} from '../../../models/day.model';

export const getDay = createAsyncThunk<GetDayResponseService>(
  'day/getDay',
  async (_, thunkAPi) => {
    try {
      const userRef = firestore()
        .collection('users')
        .doc('vCH00uWogRQMeANl1nHftl1wSyn1');
      return (await userRef
        .collection('Days')
        .where('date', '==', '3/25/2022')
        .orderBy('hour')
        .get()) as QuerySnapshotDay;
    } catch (err) {
      thunkAPi.rejectWithValue({err: 'error en carga de datos '});
    }
  },
);
