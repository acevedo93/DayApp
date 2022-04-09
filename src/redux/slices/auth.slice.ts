import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {loginFirebase} from '../../services/firebase/auth';

export const login = createAsyncThunk('auth/login', async (_, thunkApi) => {
  try {
    return loginFirebase();
  } catch (err) {
    return thunkApi.rejectWithValue({err});
  }
});

interface InitialState {
  user: '';
  isLogin: boolean;
  isLoading: boolean;
  errorMessage: '';
}

const initialState: InitialState = {
  user: '',
  isLogin: false,
  isLoading: false,
  errorMessage: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
      state.isLogin = false;
      state.err = '';
      state.user = '';
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.isLogin = false;
      state.errorMessage = 'err';
      state.user = '';
    });
  },
});

const authReducer = authSlice.reducer;

export {authReducer};
