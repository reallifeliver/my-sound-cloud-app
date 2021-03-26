import {
  createSlice,
  Action,
  PayloadAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { getHomeNewReleases, getHomeFeaturedPlayList } from './homeThunk';
import { RootState } from './index';
import { ListOfNewReleasesResponse } from 'types/spotify';
export interface HomeSliceState {
  releases: {
    data: ListOfNewReleasesResponse;
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
  releases: {
    data: {
      albums: {
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
  extraReducers: (builder) => {
    builder.addCase(getHomeNewReleases.pending, (state) => {
      state.releases.isLoading = true;
    });
    builder.addCase(getHomeNewReleases.fulfilled, (state, action) => {
      state.releases.data = action.payload;
      state.releases.isLoading = false;
    });
    builder.addCase(getHomeNewReleases.rejected, (state, action) => {
      console.error(action.payload); // FIXME 에러처리
      state.releases.isLoading = false;
    });

    builder.addCase(getHomeFeaturedPlayList.pending, (state) => {
      state.playLists.isLoading = true;
    });

    builder.addCase(getHomeFeaturedPlayList.fulfilled, (state, action) => {
      state.playLists.data = action.payload;
    });

    builder.addCase(getHomeFeaturedPlayList.rejected, (state, action) => {
      state.playLists.isLoading = false;
    });
  },
});

export const honmeActions = homeSlice.actions;
export const homeReducer = homeSlice.reducer;

export const homeReleasesSelector = (state: RootState) =>
  state.home.releases.data.albums.items;
export const homePlayListsSelector = (state: RootState) => state.home.playLists;
export const homeUsersSelector = (state: RootState) => state.home.users;
