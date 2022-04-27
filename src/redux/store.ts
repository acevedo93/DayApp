import {configureStore} from '@reduxjs/toolkit';
import {userReducer} from '../redux/slices/auth.slice';
import {dayReducer} from './slices/day.slice';
import {toastReducer} from './slices/toast.slice';

export const store = configureStore({
  reducer: {
    auth: userReducer,
    day: dayReducer,
    toast: toastReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
