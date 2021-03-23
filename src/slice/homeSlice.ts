import {
  createSlice,
  Action,
  PayloadAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { RootState } from './index';
import * as Api from '../api/deezer';
export interface HomeSliceState {
  tracks: {
    data: any[];
    isLoading: boolean;
  };
  playLists: {
    data: any[];
    isLoading: boolean;
  };
  users: {
    data: any[];
    isLoading: boolean;
  };
}

const initialState: HomeSliceState = {
  tracks: {
    data: [],
    isLoading: false,
  },
  playLists: {
    data: [],
    isLoading: false,
  },
  users: {
    data: [],
    isLoading: false,
  },
};

export const getHomeTracks = createAsyncThunk('home/tracks', async () => {
  console.log('fetch');
  const rtn = await Api.searchTracks({ string: 't', limit: 10 });
  console.log(rtn);
  return rtn.data;
});

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getTracks(_: HomeSliceState, action: PayloadAction<void>) {},
    getTracksSuccess() {},
    getPlayList() {},
    getPlayListSuccess() {},
    getUsers() {},
    getUsersSuccess() {},
  },
  extraReducers: (builder) => {
    builder.addCase(getHomeTracks.pending, (state) => {
      state.tracks.isLoading = true;
    });

    builder.addCase(getHomeTracks.fulfilled, (state, action) => {
      state.tracks.data = action.payload;
    });
  },
});

export const honmeActions = homeSlice.actions;
export const homeReducer = homeSlice.reducer;

export const homeTrasksSelector = (state: RootState) => state.home.tracks;
export const homePlayListsSelector = (state: RootState) => state.home.playLists;
export const homeUsersSelector = (state: RootState) => state.home.users;
