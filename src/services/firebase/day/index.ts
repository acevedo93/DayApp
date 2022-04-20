import firestore from '@react-native-firebase/firestore';
import {createAsyncThunk} from '@reduxjs/toolkit';
import dayjs from 'dayjs';

export const getDay = createAsyncThunk('day/getDay', async (_, thunkAPi) => {
  try {
    const userRef = firestore()
      .collection('users')
      .doc('vCH00uWogRQMeANl1nHftl1wSyn1');

    const dayData = await userRef
      .collection('Days')
      .where('date', '==', '3/25/2022')
      .orderBy('hour')
      .get();

    const day: any = [];
    const currentDateFormat = dayjs().format('dddd, DD/MMM');

    dayData.forEach(QS => {
      day.push(QS.data());
    });

    return {
      date: currentDateFormat,
      data: day,
    };
  } catch (err) {
    console.log(err);
  }
});
