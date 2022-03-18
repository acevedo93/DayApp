import { createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import { auth, provider } from '.';

export const signIn = createAsyncThunk('signIn', async (_, thunkAPI) => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;
    return {
      uid: user.uid,
      token,
      credential,
    };
  } catch (err) {
    return thunkAPI.rejectWithValue({ err });
  }
});

export const logOut = createAsyncThunk('signOut', async (_, thunkAPI) => {
  try {
    signOut(auth);
  } catch (err) {
    return thunkAPI.rejectWithValue({ err });
  }
});
