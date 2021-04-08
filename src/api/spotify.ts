import api from './instance';
import {
  ListOfNewReleasesParameter,
  ListOfNewReleasesResponse,
  ListOfFeaturedPlaylistsResponse,
  MultipleCategoriesResponse,
  ListOfCategoryParameter,
  ListofPlayListByCategoryParameter,
  AlbumObjectFull,
} from '../types/spotify';

export const getNewReleases = ({
  contry = 'KR',
  limit = 10,
  offset = 0,
}: ListOfNewReleasesParameter) => {
  return api
    .get<ListOfNewReleasesResponse>('/v1/browse/new-releas', {
      params: { contry, limit, offset },
    })
    .then((rtn) => rtn.data);
};

export const getFeaturedPlayList = ({}) => {
  return api
    .get<ListOfFeaturedPlaylistsResponse>('/v1/browse/featured-playlists', {
      params: {},
    })
    .then((rtn) => rtn.data);
};

export const getCategoryList = ({
  contry = 'KR',
  limit = 10,
  offset = 0,
  locale,
}: ListOfCategoryParameter) => {
  return api
    .get<MultipleCategoriesResponse>('/v1/browse/categories', {
      params: { contry, limit, offset, locale },
    })
    .then((rtn) => rtn.data);
};

export const getPlayListByCategory = ({
  contry = 'KR',
  limit = 10,
  offset = 0,
  categoryId,
}: ListofPlayListByCategoryParameter) => {
  return api
    .get<ListOfFeaturedPlaylistsResponse>(
      `/v1/browse/categories/${categoryId}/playlists`,
      {
        params: { contry, offset, limit },
      }
    )
    .then((rtn) => rtn.data);
};

export const getAlbum = (id: string) => {
  return api.get<AlbumObjectFull>(`v1/albums/${id}`).then((rtn) => rtn.data);
};
