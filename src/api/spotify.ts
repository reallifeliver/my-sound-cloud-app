import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import {
  ListOfNewReleasesParameter,
  ListOfNewReleasesResponse,
  ListOfFeaturedPlaylistsResponse,
  MultipleCategoriesResponse,
  ListOfCategoryParameter,
  ListofPlayListByCategoryParameter,
  AlbumObjectFull,
} from '../types/spotify';
import { CustomErrorState } from '../types/error';
import { store } from '../slice';
import { errorActions } from '../slice/errorSlice';

const client_id = '26e94a1b780d4626b4b9d79a397358ce';
const client_secret = '1353f017549f41df8dd300ad14cfa9a6';
const instance = axios.create({
  baseURL: 'https://api.spotify.com',
});

const auth = btoa(client_id + ':' + client_secret);

const getAuthParam = new URLSearchParams();
getAuthParam.append('grant_type', 'client_credentials');

instance.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const {
    data: { access_token },
  } = await axios.post('https://accounts.spotify.com/api/token', getAuthParam, {
    params: {
      grant_type: 'client_credentials',
    },
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  config.headers.Authorization = `Bearer ${access_token}`;

  return config;
});

instance.interceptors.response.use(
  (value: AxiosResponse) => value,
  (error: AxiosError) => {
    const err: CustomErrorState = {
      code: error.code,
      message: error.message,
    };
    store.dispatch(errorActions.setError(err));
  }
);

export const getNewReleases = ({
  contry = 'KR',
  limit = 10,
  offset = 0,
}: ListOfNewReleasesParameter) => {
  return instance
    .get<ListOfNewReleasesResponse>('/v1/browse/new-releases', {
      params: { contry, limit, offset },
    })
    .then((rtn) => rtn.data)
    .catch((err) => console.error(err));
};

export const getFeaturedPlayList = ({}) => {
  return instance
    .get<ListOfFeaturedPlaylistsResponse>('/v1/browse/featured-playlists', {
      params: {},
    })
    .then((rtn) => rtn.data)
    .catch((err) => console.error(err));
};

export const getCategoryList = ({
  contry = 'KR',
  limit = 10,
  offset = 0,
  locale,
}: ListOfCategoryParameter) => {
  return instance
    .get<MultipleCategoriesResponse>('/v1/browse/categories', {
      params: { contry, limit, offset, locale },
    })
    .then((rtn) => rtn.data)
    .catch((err) => console.error(err));
};

export const getPlayListByCategory = ({
  contry = 'KR',
  limit = 10,
  offset = 0,
  categoryId,
}: ListofPlayListByCategoryParameter) => {
  return instance
    .get<ListOfFeaturedPlaylistsResponse>(
      `/v1/browse/categories/${categoryId}/playlists`,
      {
        params: { contry, offset, limit },
      }
    )
    .then((rtn) => rtn.data)
    .catch((err) => console.error(err));
};

export const getAlbum = (id: string) => {
  return instance
    .get<AlbumObjectFull>(`v1/albums/${id}`)
    .then((rtn) => rtn.data)
    .catch((err) => console.error(err));
};
