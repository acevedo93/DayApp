import {configureStore} from '@reduxjs/toolkit';
import {userReducer} from '../redux/slices/auth.slice';

export const store = configureStore({
  reducer: {
    auth: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
