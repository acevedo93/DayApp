import {createSlice} from '@reduxjs/toolkit';
import {TypeToast} from '../../models';
import {RootState} from '../store';

interface InitialState {
  isOpen: boolean;
  content: string;
  type: TypeToast;
}

const initialState: InitialState = {
  isOpen: false,
  content: '',
  type: 'success',
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast: (state, action) => {
      state.isOpen = true;
      state.content = action.payload.content;
      state.type = action.payload.type || 'success';
    },
    closeToast: state => {
      state.isOpen = false;
      state.content = '';
      state.type = 'success';
    },
  },
});

export const toastReducer = toastSlice.reducer;

export const {showToast, closeToast} = toastSlice.actions;

export const toastSelector = (state: RootState) => {
  return state.toast;
};
