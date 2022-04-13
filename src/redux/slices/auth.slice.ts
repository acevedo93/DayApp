import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {loginFirebase, logoutFirebase} from '../../services/firebase/auth';

export const login = createAsyncThunk('user/login', async (_, thunkApi) => {
  try {
    return loginFirebase();
  } catch (err) {
    return thunkApi.rejectWithValue({err});
  }
});

export const logout = createAsyncThunk('user/logout', async (_, thunkApi) => {
  try {
    return await logoutFirebase();
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

export const userSlice = createSlice({
  name: 'user',
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

    builder.addCase(logout.pending, (state, action) => {
      state.isLoading = true;
    }),
      builder.addCase(logout.fulfilled, (state, action) => {
        state.user = '';
        state.isLoading = false;
      });
  },
});

export const userReducer = userSlice.reducer;
