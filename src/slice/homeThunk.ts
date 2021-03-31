import * as SpotifyApi from '../api/spotify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'slice';
import {
  PlayListByCategoriesThunksSuccess,
  ListOfFeaturedPlaylistsResponse,
} from 'types/spotify';
export const getHomeNewReleases = createAsyncThunk(
  'home/newRelease',
  async () => {
    const data = await SpotifyApi.getNewReleases({});
    return data;
  }
);

export const getHomeFeaturedPlayList = createAsyncThunk(
  'home/featuredPlayList',
  async () => {
    const data = await SpotifyApi.getFeaturedPlayList({});
    return data;
  }
);

export const getHomeCategoryList = createAsyncThunk(
  'home/categoryList',
  async () => {
    const data = await SpotifyApi.getCategoryList({ limit: 10 });
    return data;
  }
);

export const getHomeCategoryPlayList = createAsyncThunk<
  PlayListByCategoriesThunksSuccess,
  string,
  { state: RootState }
>('home/categoryPlayList', async (categoryId: string, { getState }) => {
  const categoryPlayList = getState().home.categoryPlayList.data;
  let data: void | ListOfFeaturedPlaylistsResponse;
  if (!categoryPlayList[categoryId]) {
    data = await SpotifyApi.getPlayListByCategory({
      categoryId,
      limit: 6,
    });
  }
  return { categoryId, data };
});
