import { homeReducer, HomeSliceState } from './main/homeSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { AlbumSliceState, albumReducer } from './root/albumSlice';
import { errorReducer, ErrorSliceState } from './errorSlice';

export const rootReducer = combineReducers<RootState>({
  home: homeReducer,
  album: albumReducer,
  error: errorReducer,
});

export interface RootState {
  home: HomeSliceState;
  album: AlbumSliceState;
  error: ErrorSliceState;
}

export const store = configureStore({
  reducer: rootReducer,
  devTools: true, // FIXME
});
