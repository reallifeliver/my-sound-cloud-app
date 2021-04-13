import {
  createSlice,
  ActionReducerMapBuilder,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from 'slice';
import { AlbumObjectFull } from 'types/spotify';
import { getAlbumInfoThunk } from './albumThunk';

export interface AlbumSliceState {
  data: AlbumObjectFull | null;
  isLoading: boolean;
}

const initialState: AlbumSliceState = {
  data: null,
  isLoading: false,
};

const AlbumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<AlbumSliceState>) => {
    builder
      .addCase(getAlbumInfoThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getAlbumInfoThunk.fulfilled,
        (state, action: PayloadAction<AlbumObjectFull>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(getAlbumInfoThunk.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const albumActions = AlbumSlice.actions;
export const albumReducer = AlbumSlice.reducer;

export const albumInfoSelector = (state: RootState) => state.album.data;
