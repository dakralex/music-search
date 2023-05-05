import {IArtistList} from 'musicbrainz-api/lib/musicbrainz.types';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

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
    searchArtistByName: builder.query<IArtistList, string>({
      query: name => `artist/?query=artist:${name}`,
    }),
    getArtistAlbums: builder.query<any, string>({
      query: mbid => `release/?artist=${mbid}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useLazySearchArtistByNameQuery, useGetArtistAlbumsQuery} =
  musicbrainzApi;

export default musicbrainzApi.reducer;
