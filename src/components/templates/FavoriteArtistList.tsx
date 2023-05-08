import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../AppStore';
import Paragraph from '../atoms/Paragraph';
import ArtistList from '../organisms/ArtistList';
import {useForegroundColor} from '../../hooks/Colors';

const FavoriteArtistList = (): JSX.Element => {
  const foregroundColor = useForegroundColor();
  const favoriteArtists = useSelector(
    (state: RootState) => state.favorites.favoriteArtists,
  );

  return (
    <ArtistList
      artists={Object.values(favoriteArtists)}
      noItemsComponent={
        <Paragraph>You haven't added any favorites yet.</Paragraph>
      }
    />
  );
};

export default FavoriteArtistList;
