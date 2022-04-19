import firestore from '@react-native-firebase/firestore';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const getDay = createAsyncThunk('day/getDay', async (_, thunkAPi) => {
  try {
    const userRef = firestore()
      .collection('users')
      .doc('vCH00uWogRQMeANl1nHftl1wSyn1');

    const dayData = await userRef
      .collection('Days')
      .where('date', '==', '3/25/2022')
      .get();

    const day: any = [];

    dayData.forEach(QS => {
      day.push(QS.data());
    });

    return {
      date: 'wed 23 ',
      data: day,
    };
  } catch (err) {
    console.log(err);
  }
});
