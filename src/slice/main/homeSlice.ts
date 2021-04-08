import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  getHomeNewReleases,
  getHomeFeaturedPlayList,
  getHomeCategoryList,
  getHomeCategoryPlayList,
} from './homeThunk';
import { RootState } from '../index';
import {
  ListOfNewReleasesResponse,
  ListOfFeaturedPlaylistsResponse,
  MultipleCategoriesResponse,
  PlayListByCategoriesThunksSuccess,
  PlaylistObjectSimplified,
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
      [categoryId: string]: PlaylistObjectSimplified[];
    };
    isLoading: boolean;
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
    isLoading: false,
  },
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHomeNewReleases.pending, (state) => {
        state.releases.isLoading = true;
      })
      .addCase(
        getHomeNewReleases.fulfilled,
        (state, action: PayloadAction<void | ListOfNewReleasesResponse>) => {
          state.releases.data = action.payload as ListOfNewReleasesResponse;
          state.releases.isLoading = false;
        }
      )
      .addCase(getHomeNewReleases.rejected, (state, action) => {
        console.error(action.payload); // FIXME 에러처리
        state.releases.isLoading = false;
      })
      .addCase(getHomeFeaturedPlayList.pending, (state) => {
        state.playLists.isLoading = true;
      })
      .addCase(
        getHomeFeaturedPlayList.fulfilled,
        (
          state,
          action: PayloadAction<void | ListOfFeaturedPlaylistsResponse>
        ) => {
          state.playLists.data = action.payload as ListOfFeaturedPlaylistsResponse;
          state.playLists.isLoading = false;
        }
      )
      .addCase(getHomeFeaturedPlayList.rejected, (state, action) => {
        state.playLists.isLoading = false;
      })
      .addCase(getHomeCategoryList.pending, (state) => {
        state.categoryList.isLoading = true;
      })
      .addCase(
        getHomeCategoryList.fulfilled,
        (state, action: PayloadAction<void | MultipleCategoriesResponse>) => {
          state.categoryList.data = action.payload as MultipleCategoriesResponse;
          state.categoryList.isLoading = false;
        }
      )
      .addCase(getHomeCategoryList.rejected, (state) => {
        state.categoryList.isLoading = false;
      })
      .addCase(getHomeCategoryPlayList.pending, (state) => {
        state.categoryPlayList.isLoading = true;
      })
      .addCase(
        getHomeCategoryPlayList.fulfilled,
        (
          state,
          action: PayloadAction<void | PlayListByCategoriesThunksSuccess>
        ) => {
          const {
            categoryId,
            data,
          } = action.payload as PlayListByCategoriesThunksSuccess;
          state.categoryPlayList.isLoading = false;
          state.categoryPlayList.selectedId = categoryId;
          if (data) {
            state.categoryPlayList.data[categoryId] = data.playlists.items;
          }
        }
      );
  },
});

export const honmeActions = homeSlice.actions;
export const homeReducer = homeSlice.reducer;

export const homeReleasesSelector = (state: RootState) =>
  state.home.releases.data.albums.items;
export const homePlayListsSelector = (state: RootState) =>
  state.home.playLists.data.playlists.items;
export const homePlayListMessageSelector = (state: RootState) =>
  state.home.playLists.data.message ?? 'PLAYLIST';
export const homeCategoryListSelector = (state: RootState) =>
  state.home.categoryList.data.categories.items;

export const homeCategoryPlayListSelector = (state: RootState) =>
  state.home.categoryPlayList.data;

export const homeSelectedCategorySelector = (state: RootState) =>
  state.home.categoryPlayList.selectedId;
