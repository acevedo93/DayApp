import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { authReducer } from './slices/authSlice';
import { dayReducer } from './slices/daySlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

/*const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};*/

const authPersistConfig = {
  key: 'auth',
  storage,
};
const dayPesistConfig = {
  key: 'day',
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  day: persistReducer(dayPesistConfig, dayReducer),
});

export const store = configureStore({
  reducer: rootReducer,
});
export const persistor = persistStore(store);

//infer RootState and appDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
