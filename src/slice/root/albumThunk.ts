import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAlbum } from '../../api/spotify';
import { AlbumObjectFull } from 'types/spotify';
export const getAlbumInfoThunk = createAsyncThunk<AlbumObjectFull, string>(
  'album/getAlbumInfo',
  async (albumId: string) => {
    const data = await getAlbum(albumId);
    return data;
  }
);
