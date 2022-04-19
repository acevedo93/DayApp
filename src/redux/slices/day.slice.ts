import {getDay} from '../../services/firebase/day';
import {createSlice} from '@reduxjs/toolkit';
import {AppState} from 'react-native';
import {RootState} from '../store';

interface InitialState {
  isLoading: boolean;
  data: any[];
  errorMessage: string;
  currentDate: string;
}
const initialState: InitialState = {
  isLoading: false,
  data: [],
  errorMessage: '',
  currentDate: '3/22/2022',
};

export const daySlice = createSlice({
  name: 'day',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getDay.pending, (state, action) => {
      state.isLoading = true;
      (state.errorMessage = ''), (state.data = []);
    }),
      builder.addCase(getDay.fulfilled, (state, action: {payload: any}) => {
        console.log('payl9oad', action.payload);
        state.data = action.payload.data;
        state.isLoading = false;
        state.currentDate = action.payload?.date;
      }),
      builder.addCase(getDay.rejected, (state, action) => {
        state.errorMessage = action.payload as string;
        (state.data = []), (state.isLoading = false);
      });
  },
});

export const dayReducer = daySlice.reducer;

export const daySelector = (state: RootState) => {
  return state.day;
};
