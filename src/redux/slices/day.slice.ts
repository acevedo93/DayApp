import {getDay} from '../../services/firebase/day';
import {createSlice} from '@reduxjs/toolkit';

interface InitialState {
  isloading: boolean;
  data: any[];
  errorMessage: string;
  currentDay: string;
}
const initialState: InitialState = {
  isloading: false,
  data: [],
  errorMessage: '',
  currentDay: '3/22/2022',
};

export const daySlice = createSlice({
  name: 'day',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getDay.pending, (state, action) => {}),
      builder.addCase(getDay.fulfilled, (state, action) => {}),
      builder.addCase(getDay.rejected, (state, action) => {});
  },
});

export const dayReducer = daySlice.reducer;
