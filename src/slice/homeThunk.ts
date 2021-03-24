import * as SpotifyApi from '../api/spotify';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const getHomeNewReleases = createAsyncThunk(
  'home/newRelease',
  async () => {
    const { data } = await SpotifyApi.getNewReleases({});
    console.log(data);
    return data;
  }
);
