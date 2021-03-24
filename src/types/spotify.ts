/**
 *
 * Copy and Paste from https://github.com/JMPerez/spotify-web-api-js/blob/7e6922bb389e983f92c0dcecc853e05e3784cbd1/src/typings/spotify-api.d.ts#L939
 *
 */

export interface SearchForItemParameterObject {
  q?: string;
  type?: string;
  market?: string;
  limit?: number;
  offset?: number;
}

export interface PagingObject<T> {
  href: string;
  items: T[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

export interface ExternalUrlObject {
  spotify: string;
}

export interface ImageObject {
  height?: number;
  url: string;
  width?: number;
}

export interface FollowersObject {
  href: string;
  total: number;
}

export interface ArtistObjectFull extends ArtistObjectSimplified {
  followers: FollowersObject;
  genres: string[];
  images: ImageObject[];
  popularity: number;
}

export interface ArtistObjectSimplified {
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  name: string;
  type: 'artist';
  uri: string;
}

export interface AlbumObjectSimplified {
  album_type: string;
  available_markets?: string[];
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  images: ImageObject[];
  name: string;
  type: 'album';
  uri: string;
}

export interface AlbumObjectFull extends AlbumObjectSimplified {
  artists: ArtistObjectSimplified[];
  genres: string[];
  popularity: number;
  release_date: string;
  release_date_precision: string;
}

export interface ListOfNewRleasesParameter {
  contry?: string;
  limit?: number;
  offset?: number;
}

export interface ListOfNewReleasesResponse {
  message?: string;
  albums: PagingObject<AlbumObjectFull>;
}
