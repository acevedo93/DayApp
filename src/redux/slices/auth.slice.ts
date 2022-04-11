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
  user: string;
  errorMessage: string;
  isLogin: boolean;
  isLoading: boolean;
}

const initialState: InitialState = {
  user: '',
  errorMessage: '',
  isLogin: false,
  isLoading: false,
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
      state.errorMessage = '';
      state.user = '';
    });
    builder.addCase(login.rejected, (state, action) => {
      state.errorMessage = '';
      state.user = '';
      state.isLoading = false;
      state.isLogin = false;
    });
  },
});

const authReducer = authSlice.reducer;

export {authReducer};
