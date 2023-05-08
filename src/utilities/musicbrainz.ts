import {IAlbumList} from '../components/organisms/AlbumList';
import {IArtistList} from '../components/organisms/ArtistList';
import {IAlbumListItem} from '../components/molecules/AlbumListItem';
import {
  IArtistList as IMbArtistList,
  IArtistMatch as IMbArtistMatch,
  IReleaseGroupList as IMbReleaseGroupList,
  IReleaseGroupMatch as IMbReleaseGroupMatch,
} from 'musicbrainz-api/lib/musicbrainz.types';

/**
 * Transforms response from MusicBrainz' Artist Search API to usable data.
 *
 * @param response
 */
export const transformArtistSearchResults = (
  response?: IMbArtistList,
): IArtistList => {
  const artistsArray = response?.artists ?? [];

  // Exclude results that don't have any distinctive data (without area or founding date)
  const filteredArtistsArray = artistsArray.filter(
    artist => artist.area?.name != null || artist['life-span']?.begin != null,
  );

  // Map response to IArtistList
  return filteredArtistsArray.map((artist: IMbArtistMatch) => {
    const begin = artist['life-span']?.begin;
    const end = artist['life-span']?.end;

    const area = artist.area?.name ?? null;
    const beginDate = begin
      ? new Date(begin).getUTCFullYear().toString(10)
      : null;
    const endDate = end ? new Date(end).getUTCFullYear().toString(10) : null;

    return {
      id: artist.id,
      name: artist.name,
      area: area,
      lifespan: {
        begin: beginDate,
        end: endDate,
      },
    };
  });
};

const sortIAlbumList = (a: IAlbumListItem, b: IAlbumListItem): number => {
  const releaseA = parseInt(a.release ?? '0', 10),
    releaseB = parseInt(b.release ?? '0', 10);

  if (releaseA < releaseB) {
    return -1;
  }

  if (releaseA > releaseB) {
    return 1;
  }

  const nameA = a.name.toLowerCase(),
    nameB = b.name.toLowerCase();

  return nameA.localeCompare(nameB);
};

/**
 * Transforms response from MusicBrainz' Release Group API to usable data.
 *
 * @param response
 */
export const transformReleaseGroupsInfo = (
  response?: IMbReleaseGroupList,
): IAlbumList => {
  const releaseGroupsArray = response?.['release-groups'] ?? [];

  // Exclude results that don't have any distinctive data (without release date)
  const filteredReleaseGroupsArray = releaseGroupsArray.filter(
    releaseGroup => releaseGroup?.['first-release-date'] != null,
  );

  // Map response values to IAlbumList
  const releaseGroups = filteredReleaseGroupsArray.map(
    (releaseGroup: IMbReleaseGroupMatch): IAlbumListItem => {
      const release = releaseGroup?.['first-release-date'];
      const releaseDate = release
        ? new Date(release).getUTCFullYear().toString(10)
        : null;

      return {
        id: releaseGroup.id,
        name: releaseGroup.title,
        release: releaseDate,
      };
    },
  );

  return releaseGroups.sort(sortIAlbumList);
};
