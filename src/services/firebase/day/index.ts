import firestore from '@react-native-firebase/firestore';
import {createAsyncThunk} from '@reduxjs/toolkit';

import {
  QuerySnapshotDay,
  GetDayResponseService,
  DayData,
} from '../../../models/day.model';

import {storeData} from '../../AsyncStorage';

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
    await storeData('day', day);

    const userRef = firestore()
      .collection('users')
      .doc('vCH00uWogRQMeANl1nHftl1wSyn1');

    const documentsPromises = day.map(async blockHour => {
      return userRef.collection('Days').add(blockHour);
    });

    try {
      return await Promise.all(documentsPromises).then(res => {
        //show toast
      });
    } catch (err) {
      return thunkApi.rejectWithValue({err: 'loading data'});
    }
  },
);
