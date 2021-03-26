import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import {
  ListOfNewRleasesParameter,
  ListOfNewReleasesResponse,
} from '../types/spotify';
import SpotifyApi from 'spotify-web-api-js';

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

export const getNewReleases = ({
  contry = 'KR',
  limit = 10,
  offset = 0,
}: ListOfNewRleasesParameter) => {
  console.log('GetNewReleaseParam');
  return instance
    .get<ListOfNewReleasesResponse>('/v1/browse/new-releases', {
      params: { contry, limit, offset },
    })
    .then((rtn) => rtn.data)
    .catch((err) => console.error(err));
};

export const getFeaturedPlayList = ({}) => {
  return instance
    .get('v1/browse/featured-playlists', {
      params: {},
    })
    .then((rtn) => rtn.data)
    .catch((err) => console.error(err));
};
