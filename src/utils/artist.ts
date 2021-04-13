import { ArtistObjectSimplified } from 'types/spotify';

export const getArtistSummary = (artists: ArtistObjectSimplified[]) => {
  return artists.length > 1
    ? `${artists[0].name} 외 ${artists.length - 1} 팀`
    : artists[0].name;
};
