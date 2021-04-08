import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CustomErrorState } from 'types/error';
import { RootState } from 'slice';

export interface ErrorSliceState {
  error: CustomErrorState | null;
}

const initialState: ErrorSliceState = {
  error: null,
};

const ErrorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError(state: ErrorSliceState, action: PayloadAction<CustomErrorState>) {
      state.error = action.payload;
    },
    resetError(state: ErrorSliceState) {
      state.error = null;
    },
  },
  extraReducers: {},
});

export const errorActions = ErrorSlice.actions;
export const errorReducer = ErrorSlice.reducer;

export const errorSelector = (state: RootState) => state.error.error;
