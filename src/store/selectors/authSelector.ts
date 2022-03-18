import { AuthState } from '../slices/authSlice';

export const authSelector = (state: { auth: AuthState }) =>
  state.auth.authenticated;

export const authLoadingSelector = (state: { auth: AuthState }) =>
  state.auth.loading;

export const authErrorSelector = (state: { auth: AuthState }) =>
  state.auth.error;
