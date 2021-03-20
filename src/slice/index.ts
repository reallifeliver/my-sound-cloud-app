import { homeReducer, HomeSliceState } from './homeSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

export const rootReducer = combineReducers<RootState>({
  home: homeReducer,
});

export interface RootState {
  home: HomeSliceState;
}

export const store = configureStore({
  reducer: rootReducer,
  devTools: true, // FIXME
});
