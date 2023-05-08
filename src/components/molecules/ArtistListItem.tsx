import React from 'react';
import {Icon} from '@rneui/themed';
import Subtitle from '../atoms/Subtitle';
import Paragraph from '../atoms/Paragraph';
import {StyleSheet, View} from 'react-native';
import {useForegroundColor} from '../../hooks/Colors';
import FavoriteArtistButton from '../atoms/FavoriteArtistButton';

export type IArtistListItem = {
  id: string;
  name: string;
  area: string | null;
  lifespan: {
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
  const foregroundColor = useForegroundColor();
  const {name, area, lifespan} = artist;

  return (
    <View style={styles.artistListItemContainer}>
      <View style={styles.artistListItemTextList}>
        <Subtitle>{name}</Subtitle>
        <Paragraph>
          {lifespan.begin !== null ? lifespan.begin : ''}–
          {lifespan.end !== null ? lifespan.end : ''}
        </Paragraph>
        {area != null && <Paragraph>{area}</Paragraph>}
      </View>
      {shouldBeFavorable && (
        <FavoriteArtistButton
          artist={artist}
          iconStyle={shouldBeNavigable ? {marginRight: 8} : {}}
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
  },
  artistListItemTextList: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default ArtistListItem;
