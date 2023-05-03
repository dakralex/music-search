import React from 'react';
import Subtitle from '../atoms/Subtitle';
import Paragraph from '../atoms/Paragraph';
import {StyleSheet, View} from 'react-native';

export type ArtistListItemProps = {
  name: string;
  yearsActive: {
    begin: string;
    end: string | null;
  };
  areaFormed: string;
};

const ArtistListItem = ({
  name,
  yearsActive,
  areaFormed,
}: ArtistListItemProps) => {
  return (
    <View style={styles.artistListItemContainer}>
      <View style={styles.artistListItemTextList}>
        <Subtitle>{name}</Subtitle>
        <Paragraph>
          {yearsActive.begin}&nbsp;-&nbsp;
          {yearsActive.end !== null ? yearsActive.end : ''}
        </Paragraph>
        <Paragraph>{areaFormed}</Paragraph>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  artistListItemContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 24,
  },
  artistListItemTextList: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default ArtistListItem;
