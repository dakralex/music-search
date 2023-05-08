import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
  IArtistList as IMbArtistList,
  IReleaseGroupList as IMbReleaseGroupList,
} from 'musicbrainz-api/lib/musicbrainz.types';

export const musicbrainzApi = createApi({
  reducerPath: 'musicbrainz',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://musicbrainz.org/ws/2/',
    headers: {
      Accept: 'application/json',
      Content: 'application/json',
      'User-Agent': 'MusicSearch/v0.0.1 ( dakral@protonmail.com )',
    },
  }),
  endpoints: builder => ({
    searchArtistByName: builder.query<IMbArtistList, string>({
      query: name => `artist/?query=artist:${name}`,
    }),
    getArtistReleaseGroups: builder.query<IMbReleaseGroupList, string>({
      query: mbid => `release-group/?artist=${mbid}&type=album`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useLazySearchArtistByNameQuery, useGetArtistReleaseGroupsQuery} =
  musicbrainzApi;

export default musicbrainzApi.reducer;
