import {IAlbumList} from '../components/organisms/AlbumList';
import {IArtistList} from '../components/organisms/ArtistList';
import {IAlbumListItem} from '../components/molecules/AlbumListItem';
import {IArtistListItem} from '../components/molecules/ArtistListItem';
import {
  IArtistList as IMbArtistList,
  IArtistMatch as IMbArtistMatch,
  IReleaseGroupList as IMbReleaseGroupList,
  IReleaseGroupMatch as IMbReleaseGroupMatch,
} from 'musicbrainz-api/lib/musicbrainz.types';

/**
 * Transforms response from MusicBrainz' Artist Search API to usable data.
 *
 * @param artistArray
 */
export const transformArtistSearchResults = (
  artistArray?: IMbArtistList,
): IArtistList => {
  const artists: IArtistList = (artistArray?.artists ?? []).map(
    (artist: IMbArtistMatch) => {
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
  return artists.filter((artist: IArtistListItem) => {
    return artist.areaActive !== null && artist.yearsActive.begin !== null;
  });
};

/**
 * Transforms response from MusicBrainz' Release Group API to usable data.
 *
 * @param releaseGroupsArray
 */
export const transformReleaseGroupsInfo = (
  releaseGroupsArray?: IMbReleaseGroupList,
): IAlbumList => {
  return (releaseGroupsArray?.['release-groups'] ?? []).map(
    (release: IMbReleaseGroupMatch): IAlbumListItem => {
      return {
        id: release.id,
        name: release.title,
        releaseDate: release['first-release-date'],
      };
    },
  );
};
