import { configureStore, combineReducers, AnyAction } from '@reduxjs/toolkit';

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

const appReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  day: persistReducer(dayPesistConfig, dayReducer),
});

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === 'signOut/fulfilled') {
    storage.removeItem('persist:day');
    state = {} as RootState;
    return appReducer(state, action);
  }

  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});
export const persistor = persistStore(store);

//infer RootState and appDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
