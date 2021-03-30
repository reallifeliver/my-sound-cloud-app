import * as SpotifyApi from '../api/spotify';
import { createAsyncThunk } from '@reduxjs/toolkit';
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

export const getCategoryPlayList = createAsyncThunk(
  'home/categoryPlayList',
  async (id) => {}
);
