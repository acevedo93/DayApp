import { RootState } from '..';

export const daySelector = (state: RootState) => state.day.data;
export const dayLoadingSelector = (state: RootState) => state.day.loading;
