import React from 'react';
import {RootState} from '../../AppStore';
import {Button, Icon} from '@rneui/themed';
import {TextStyle, ViewStyle} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IArtistListItem} from '../molecules/ArtistListItem';
import {useForegroundColor, usePrimaryColor} from '../../hooks/Colors';
import {
  addFavoriteArtist,
  removeFavoriteArtist,
} from '../../features/favorites/favoritesSlice';

type FavoriteButtonProps = {
  artist: IArtistListItem;
  iconStyle?: ViewStyle | TextStyle;
};

const FavoriteArtistButton = ({artist, iconStyle}: FavoriteButtonProps) => {
  const dispatch = useDispatch();
  const isFavoriteArtist = useSelector(
    (state: RootState) => !!state.favorites.favoriteArtists[artist.id],
  );

  const primaryColor = usePrimaryColor();
  const foregroundColor = useForegroundColor();

  return (
    <Button
      type="clear"
      onPress={() => {
        dispatch(
          isFavoriteArtist
            ? removeFavoriteArtist(artist.id)
            : addFavoriteArtist(artist),
        );
      }}
      icon={
        <Icon
          type="material"
          name="star"
          size={28}
          style={iconStyle}
          color={isFavoriteArtist ? primaryColor : foregroundColor}
        />
      }
    />
  );
};

export default FavoriteArtistButton;
