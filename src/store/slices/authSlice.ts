import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OAuthCredential } from 'firebase/auth';
import { logOut, signIn } from '../../services/firebase/auth';

export interface AuthState {
  uid: string;
  token?: string | null;
  credential?: OAuthCredential | null;
  loading: boolean;
  error: string;
  authenticated: boolean;
}

const initialState: AuthState = {
  uid: '',
  token: null,
  credential: null,
  loading: false,
  error: '',
  authenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //SIGNIN
    builder.addCase(signIn.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(signIn.fulfilled, (state, action) => {
      const { uid, token, credential } = action.payload;
      state.uid = uid;
      state.token = token;
      state.credential = credential;
      state.loading = false;
      state.authenticated = true;
    });

    builder.addCase(signIn.rejected, (state, action) => {
      state.error = '';
      state.loading = false;
    });

    //LOGOUT

    builder.addCase(logOut.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(logOut.fulfilled, (state, action) => {
      state.loading = false;
      state.authenticated = false;
      state.error = '';
      state.credential = null;
      state.uid = '';
      state.token = null;
    });

    builder.addCase(logOut.rejected, (state, action) => {
      state.error = '';
      state.loading = false;
    });
  },
});

export const authReducer = authSlice.reducer;