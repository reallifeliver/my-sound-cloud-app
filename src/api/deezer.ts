import axios, { AxiosResponse, AxiosPromise, AxiosRequestConfig } from 'axios';
import SpotifyWebApi from 'spotify-web-api-js';

const client_id = '26e94a1b780d4626b4b9d79a397358ce';
const client_secret = '1353f017549f41df8dd300ad14cfa9a6';
const instance = axios.create({
  baseURL: 'https://api.spotify.com',
});

const spotifyApi = new SpotifyWebApi();
interface SearchTracksParam {
  contry?: string;
  limit?: number;
  offset?: number;
}

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

export const searchTracks = ({
  contry = 'KR',
  limit = 10,
  offset = 5,
}: SearchTracksParam) => {
  console.log('searchTrackssearchTracks');

  return instance
    .get('/v1/browse/new-releases')
    .then((rtn) => rtn)
    .catch((err) => console.error(err));
};
