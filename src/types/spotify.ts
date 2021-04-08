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

export interface PageParameter {
  contry?: string;
  limit?: number;
  offset?: number;
}

export interface ListOfNewReleasesParameter extends PageParameter {}

export interface ListOfCategoryParameter extends PageParameter {
  locale?: string;
}

export interface ListOfPlayListParameter extends PageParameter {}

export interface ListofPlayListByCategoryParameter
  extends ListOfPlayListParameter {
  categoryId: string;
}

export interface ListOfNewReleasesResponse {
  message?: string;
  albums: PagingObject<AlbumObjectFull>;
}

export interface UserObjectPublic {
  display_name?: string;
  external_urls: ExternalUrlObject;
  followers?: FollowersObject;
  href: string;
  id: string;
  images?: ImageObject[];
  type: 'user';
  uri: string;
}

export interface PlaylistBaseObject {
  collaborative: boolean;
  description: string | null;
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  images: ImageObject[];
  name: string;
  owner: UserObjectPublic;
  public: boolean;
  snapshot_id: string;
  type: 'playlist';
  uri: string;
}

export interface ListOfFeaturedPlaylistsResponse {
  message?: string;
  playlists: PagingObject<PlaylistObjectSimplified>;
}

export interface ExternalIdObject {
  isrc?: string;
  ean?: string;
  upc?: string;
}

export interface TrackLinkObject {
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  type: 'track';
  uri: string;
}

export interface TrackObjectSimplified {
  artists: ArtistObjectSimplified[];
  available_markets?: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  is_playable?: boolean;
  linked_from?: TrackLinkObject;
  name: string;
  preview_url: string;
  track_number: number;
  type: 'track';
  uri: string;
}

export interface TrackObjectFull extends TrackObjectSimplified {
  album: AlbumObjectSimplified;
  external_ids: ExternalIdObject;
  popularity: number;
}

export interface PlaylistTrackObject {
  added_at: string;
  added_by: UserObjectPublic;
  is_local: boolean;
  track: TrackObjectFull | EpisodeObjectFull;
}

export interface PlaylistObjectFull extends PlaylistBaseObject {
  followers: FollowersObject;
  tracks: PagingObject<PlaylistTrackObject>;
}

export interface PlaylistObjectSimplified extends PlaylistBaseObject {
  tracks: {
    href: string;
    total: number;
  };
}
export interface CopyrightObject {
  text: string;
  type: 'C' | 'P';
}

export interface ShowObjectSimplified {
  available_markets?: string[];
  copyrights: CopyrightObject[];
  description: string;
  explicit: boolean;
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  images: ImageObject[];
  is_externally_hosted: boolean;
  languages: string[];
  media_type: string;
  name: string;
  publisher: string;
  type: 'show';
  uri: string;
}

export interface EpisodeObjectFull extends EpisodeObjectSimplified {
  show: ShowObjectSimplified;
}

export interface EpisodeObjectSimplified {
  audio_preview_url: string | null;
  description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  images: ImageObject[];
  is_externally_hosted: boolean;
  is_playable: boolean;
  languages: string[];
  name: string;
  release_date: string;
  release_date_precision: string;
  resume_point: ResumePointObject;
  type: 'episode';
  uri: string;
}

export interface ResumePointObject {
  full_played: boolean;
  resume_position_ms: number;
}

export interface MultipleCategoriesResponse {
  categories: PagingObject<CategoryObject>;
}

export interface PlayListByCategoriesThunksSuccess {
  categoryId: string;
  data: ListOfFeaturedPlaylistsResponse | void;
}

export interface CategoryObject {
  href: string;
  icons: ImageObject[];
  id: string;
  name: string;
}

