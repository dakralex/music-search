import React from 'react';
import {RootState} from '../../AppStore';
import Subtitle from '../atoms/Subtitle';
import Paragraph from '../atoms/Paragraph';
import {Button, Icon} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useForegroundColor, usePrimaryColor} from '../../hooks/Colors';
import {
  addFavoriteArtist,
  removeFavoriteArtist,
} from '../../features/favorites/favoritesSlice';

export type IArtistListItem = {
  id: string;
  name: string;
  areaActive: string | null;
  yearsActive: {
    begin: string | null;
    end: string | null;
  };
};

export type ArtistListItemProps = {
  artist: IArtistListItem;
  shouldBeFavorable?: boolean;
  shouldBeNavigable?: boolean;
};

const ArtistListItem = ({
  artist,
  shouldBeFavorable = true,
  shouldBeNavigable = true,
}: ArtistListItemProps): JSX.Element => {
  const {id, name, areaActive, yearsActive} = artist;

  const dispatch = useDispatch();
  const isFavoriteArtist = useSelector(
    (state: RootState) => !!state.favorites.favoriteArtists[id],
  );

  const primaryColor = usePrimaryColor();
  const foregroundColor = useForegroundColor();

  return (
    <View style={styles.artistListItemContainer}>
      <View style={styles.artistListItemTextList}>
        <Subtitle>{name}</Subtitle>
        <Paragraph>
          {yearsActive.begin !== null ? yearsActive.begin : ''}–
          {yearsActive.end !== null ? yearsActive.end : ''}
        </Paragraph>
        {areaActive != null && <Paragraph>{areaActive}</Paragraph>}
      </View>
      {shouldBeFavorable && (
        <Button
          type="clear"
          onPress={() => {
            dispatch(
              isFavoriteArtist
                ? removeFavoriteArtist(id)
                : addFavoriteArtist(artist),
            );
          }}
          icon={
            <Icon
              type="material"
              name="star"
              size={28}
              color={isFavoriteArtist ? primaryColor : foregroundColor}
              style={shouldBeNavigable ? {marginRight: 8} : {}}
            />
          }
        />
      )}
      {shouldBeNavigable && (
        <Icon
          type="material"
          name="east"
          size={28}
          color={foregroundColor}
          style={shouldBeFavorable ? {marginLeft: 8} : {}}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  artistListItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  artistListItemTextList: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default ArtistListItem;
