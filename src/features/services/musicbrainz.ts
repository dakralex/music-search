import {IAlbumList} from '../../components/organisms/AlbumList';
import {IArtistList} from '../../components/organisms/ArtistList';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
  transformArtistSearchResults,
  transformReleaseGroupsInfo,
} from '../../utilities/musicbrainz';

export const musicbrainzApi = createApi({
  reducerPath: 'musicbrainz',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://musicbrainz.org/ws/2/',
    headers: {
      Accept: 'application/json',
      Content: 'application/json',
      'User-Agent': 'MusicSearch/v1.0 ( dakral@protonmail.com )',
    },
  }),
  endpoints: builder => ({
    searchArtistByName: builder.query<IArtistList, string>({
      query: name => `artist/?query=artist:${name}`,
      transformResponse: artistArray => {
        // @ts-ignore
        return transformArtistSearchResults(artistArray);
      },
    }),
    getArtistReleaseGroups: builder.query<IAlbumList, string>({
      query: mbid => `release-group/?artist=${mbid}&type=album`,
      transformResponse: releaseGroupsArray => {
        // @ts-ignore
        return transformReleaseGroupsInfo(releaseGroupsArray);
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useLazySearchArtistByNameQuery, useGetArtistReleaseGroupsQuery} =
  musicbrainzApi;
export default musicbrainzApi.reducer;
