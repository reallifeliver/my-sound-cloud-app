import {
  createSlice,
  ActionReducerMapBuilder,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from 'slice';
import {
  AlbumObjectFull,
  PagingObject,
  TrackObjectSimplified,
} from 'types/spotify';
import { getAlbumInfoThunk } from './albumThunk';

export interface AlbumSliceState {
  data: {
    info: Omit<AlbumObjectFull, 'tracks'> | null;
    tracks: PagingObject<TrackObjectSimplified>;
  };
  isLoading: boolean;
}

const initialState: AlbumSliceState = {
  data: {
    info: null,
    tracks: {
      href: '',
      items: [],
      limit: 0,
      next: '',
      offset: 0,
      previous: '',
      total: 0,
    },
  },
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
          const { tracks, ...info } = action.payload;
          state.data.info = info;
          state.data.tracks = tracks;
        }
      )
      .addCase(getAlbumInfoThunk.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const albumActions = AlbumSlice.actions;
export const albumReducer = AlbumSlice.reducer;

export const albumInfoSelector = (state: RootState) => state.album.data.info;
export const albumTracksSelector = (state: RootState) =>
  state.album.data.tracks;
