import {
  createSlice,
  Action,
  PayloadAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import {
  getHomeNewReleases,
  getHomeFeaturedPlayList,
  getHomeCategoryList,
} from './homeThunk';
import { RootState } from './index';
import {
  ListOfNewReleasesResponse,
  PlaylistObjectSimplified,
  ListOfFeaturedPlaylistsResponse,
  MultipleCategoriesResponse,
  CategoryObject,
} from 'types/spotify';
export interface HomeSliceState {
  releases: {
    data: ListOfNewReleasesResponse;
    isLoading: boolean;
  };
  playLists: {
    data: ListOfFeaturedPlaylistsResponse;
    isLoading: boolean;
  };
  categoryList: {
    data: MultipleCategoriesResponse;
    isLoading: boolean;
  };
  categoryPlayList: {
    selectedId: string;
    data: {
      [categoryId: string]: CategoryObject[];
    };
  };
}

const initPageObj = {
  href: '',
  items: [],
  limit: 0,
  next: '',
  offset: 0,
  previous: '',
  total: 0,
};

const initialState: HomeSliceState = {
  releases: {
    data: {
      albums: { ...initPageObj },
    },
    isLoading: false,
  },
  playLists: {
    data: {
      message: '',
      playlists: { ...initPageObj },
    },
    isLoading: false,
  },
  categoryList: {
    data: {
      categories: { ...initPageObj },
    },
    isLoading: false,
  },
  categoryPlayList: {
    selectedId: '',
    data: {},
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
    builder.addCase(
      getHomeNewReleases.fulfilled,
      (state, action: PayloadAction<void | ListOfNewReleasesResponse>) => {
        state.releases.data = action.payload as ListOfNewReleasesResponse;
        state.releases.isLoading = false;
      }
    );
    builder.addCase(getHomeNewReleases.rejected, (state, action) => {
      console.error(action.payload); // FIXME 에러처리
      state.releases.isLoading = false;
    });
    builder.addCase(getHomeFeaturedPlayList.pending, (state) => {
      state.playLists.isLoading = true;
    });
    builder.addCase(
      getHomeFeaturedPlayList.fulfilled,
      (
        state,
        action: PayloadAction<void | ListOfFeaturedPlaylistsResponse>
      ) => {
        state.playLists.data = action.payload as ListOfFeaturedPlaylistsResponse;
        state.playLists.isLoading = false;
      }
    );
    builder.addCase(getHomeFeaturedPlayList.rejected, (state, action) => {
      state.playLists.isLoading = false;
    });
    builder.addCase(getHomeCategoryList.pending, (state) => {
      state.categoryList.isLoading = true;
    });
    builder.addCase(
      getHomeCategoryList.fulfilled,
      (state, action: PayloadAction<void | MultipleCategoriesResponse>) => {
        state.categoryList.data = action.payload as MultipleCategoriesResponse;
        state.categoryList.isLoading = false;
      }
    );
    builder.addCase(getHomeCategoryList.rejected, (state, action) => {
      state.categoryList.isLoading = false;
    });
  },
});

export const honmeActions = homeSlice.actions;
export const homeReducer = homeSlice.reducer;

export const homeReleasesSelector = (state: RootState) =>
  state.home.releases.data.albums.items;
export const homePlayListsSelector = (state: RootState) =>
  state.home.playLists.data.playlists.items;
export const homePlayListMessage = (state: RootState) =>
  state.home.playLists.data.message ?? 'PLAYLIST';
export const homeCategoryListSelector = (state: RootState) =>
  state.home.categoryList.data.categories.items;
