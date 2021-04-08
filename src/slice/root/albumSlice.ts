import { createSlice, ActionReducerMapBuilder } from '@reduxjs/toolkit';

export interface AlbumSliceState {}

const initialState: AlbumSliceState = {};

const AlbumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<AlbumSliceState>) => {},
});

export const albumActions = AlbumSlice.actions;
export const albumReducer = AlbumSlice.reducer;
