import firestore from '@react-native-firebase/firestore';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {formatMessage} from '../../../adapters';

import {
  QuerySnapshotDay,
  GetDayResponseService,
  DayData,
} from '../../../models/day.model';
import {showToast} from '../../../redux/slices/toast.slice';

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

export const createDay = createAsyncThunk<any, DayData[]>(
  'day/createDay',
  async (day, thunkApi) => {
    const userRef = firestore()
      .collection('users')
      .doc('vCH00uWogRQMeANl1nHftl1wSyn1');

    const documentsPromises = day.map(async blockHour => {
      return userRef.collection('Days').add(blockHour);
    });

    try {
      return await Promise.all(documentsPromises).then(res => {
        thunkApi.dispatch(showToast(formatMessage('createDaySuccess')));
      });
    } catch (err) {
      return thunkApi.rejectWithValue({err: 'loading data'});
    }
  },
);
