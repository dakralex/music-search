import React from 'react';
import AppScreen from './AppScreen';
import FavoriteArtistList from '../../components/templates/FavoriteArtistList';

const FavoritesScreen = (): JSX.Element => {
  return (
    <AppScreen>
      <FavoriteArtistList />
    </AppScreen>
  );
};

export default FavoritesScreen;
