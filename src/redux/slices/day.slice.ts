import {getDay} from '../../services/firebase/day';
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {DayData} from '../../models';
import {dayAdapter} from '../../adapters/day.adapter';

interface InitialState {
  isLoading: boolean;
  data: DayData[] | [];
  errorMessage: string;
  currentDate: string;
  isCreationMode: boolean;
}

const initialState: InitialState = {
  isLoading: false,
  data: [],
  errorMessage: '',
  currentDate: '3/22/2022',
  isCreationMode: false,
};

export const daySlice = createSlice({
  name: 'day',
  initialState,
  reducers: {
    setCreationMode(state) {
      state.isCreationMode = true;
    },
    disableCreationMode(state) {
      state.isCreationMode = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(getDay.pending, state => {
      state.errorMessage = '';
      state.isLoading = true;
      state.data = [];
    }),
      builder.addCase(getDay.fulfilled, (state, action) => {
        const {data, date} = dayAdapter(action.payload!);
        state.data = data;
        state.currentDate = date;
        state.isLoading = false;
        state.isCreationMode = false;
      });
    builder.addCase(getDay.rejected, (state, action) => {
      state.errorMessage = action.payload as string;
      (state.data = []), (state.isLoading = false);
    });
  },
});

export const dayReducer = daySlice.reducer;
export const {setCreationMode, disableCreationMode} = daySlice.actions;

export const daySelector = (state: RootState) => {
  return state.day;
};
