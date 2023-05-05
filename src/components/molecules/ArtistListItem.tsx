import React from 'react';
import Subtitle from '../atoms/Subtitle';
import Paragraph from '../atoms/Paragraph';
import {StyleSheet, View} from 'react-native';

export type ArtistListItemProps = {
  name: string;
  areaActive: string | null;
  yearsActive: {
    begin: string | null;
    end: string | null;
  };
};

const ArtistListItem = ({
  name,
  areaActive,
  yearsActive,
}: ArtistListItemProps): JSX.Element => {
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
