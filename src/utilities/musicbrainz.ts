import {KeyedArtistListItem} from '../components/organisms/ArtistList';
import {IArtistList, IArtistMatch} from 'musicbrainz-api/lib/musicbrainz.types';

export const transformArtistToApp = (
  artistArray?: IArtistList,
): Array<KeyedArtistListItem> => {
  const artists: Array<KeyedArtistListItem> = (artistArray?.artists ?? []).map(
    (artist: IArtistMatch) => {
      const begin = artist['life-span']?.begin;
      const end = artist['life-span']?.end;

      const area = artist.area?.name ?? null;
      const yearsActiveBegin = begin
        ? new Date(begin).getUTCFullYear().toString(10)
        : null;
      const yearsActiveEnd = end
        ? new Date(end).getUTCFullYear().toString(10)
        : null;

      return {
        id: artist.id,
        name: artist.name,
        areaActive: area,
        yearsActive: {
          begin: yearsActiveBegin,
          end: yearsActiveEnd,
        },
      };
    },
  );

  // Filter the search results for ones that can be separated from each other (with active years and area)
  return artists.filter((artist: KeyedArtistListItem) => {
    return artist.areaActive !== null && artist.yearsActive.begin !== null;
  });
};
