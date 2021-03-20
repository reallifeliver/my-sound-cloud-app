import { createSlice, Action, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';
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
});

export const honmeActions = homeSlice.actions;
export const homeReducer = homeSlice.reducer;

export const homeTrasksSelector = (state: RootState) => state.home.tracks;
export const homePlayListsSelector = (state: RootState) => state.home.playLists;
export const homeUsersSelector = (state: RootState) => state.home.users;
