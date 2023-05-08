import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../AppStore';
import ArtistList from '../organisms/ArtistList';

const FavoriteArtistList = (): JSX.Element => {
  const favoriteArtists = useSelector(
    (state: RootState) => state.favorites.favoriteArtists,
  );

  return <ArtistList artists={Object.values(favoriteArtists)} />;
};

export default FavoriteArtistList;
