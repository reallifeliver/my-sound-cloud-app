import api from '../api/instance';
import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { CustomErrorState } from '../types/error';
import { errorActions } from '../slice/errorSlice';
import { EnhancedStore, CombinedState } from '@reduxjs/toolkit';
import { RootState } from '../slice';
import { encode } from 'base-64';
const setAxoisInterceptor = (
  store: EnhancedStore<CombinedState<RootState>>
) => {
  // FIXME 환경변수로 빼자
  const client_id = '26e94a1b780d4626b4b9d79a397358ce';
  const client_secret = '1353f017549f41df8dd300ad14cfa9a6';
  console.log(window);
  const auth = encode(client_id + ':' + client_secret);

  const getAuthParam = new URLSearchParams();
  getAuthParam.append('grant_type', 'client_credentials');

  // FIXME 이건 반드시 고쳐야 함. 매 요청마다 이럴 수는 없음. 1시간을 어떻게 체크할 것인지... swr을 사용하면 되려나
  api.interceptors.request.use(async (config: AxiosRequestConfig) => {
    const {
      data: { access_token },
    } = await axios.post(
      'https://accounts.spotify.com/api/token',
      getAuthParam,
      {
        params: {
          grant_type: 'client_credentials',
        },
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    config.headers.Authorization = `Bearer ${access_token}`;

    return config;
  });

  api.interceptors.response.use(
    (value: AxiosResponse) => value,
    (error: AxiosError) => {
      const err: CustomErrorState = {
        message: error.message,
        status: error.response?.status,
      };

      store.dispatch(errorActions.setError(err)); // FIXME Require cycles are allowed src/slice/main/homeThunk.ts -> src/api/spotify.ts -> src/slice/index.ts -> src/slice/main/homeSlice.ts -> src/slice/main/homeThunk.ts
      return Promise.reject(error);
    }
  );
};

export default setAxoisInterceptor;
