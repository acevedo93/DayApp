import { AuthState } from '../slices/authSlice';

export const authSelector = (state: { auth: AuthState }) =>
  state.auth.authenticated;
