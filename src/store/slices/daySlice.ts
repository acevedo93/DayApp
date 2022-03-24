import { createSlice } from '@reduxjs/toolkit';
import { getDay } from '../../services/firebase/days';
import { ScheduleBlock } from '../../types/schedule';

export interface DayState {
  loading: boolean;
  error: string;
  data: ScheduleBlock[];
}

const initialState: DayState = {
  loading: false,
  error: '',
  data: [],
};

export const daySlice = createSlice({
  name: 'day',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //SIGNIN
    builder.addCase(getDay.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getDay.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });

    builder.addCase(getDay.rejected, (state, action) => {
      state.error = action.payload as any;
      state.loading = false;
    });
  },
});

export const dayReducer = daySlice.reducer;
