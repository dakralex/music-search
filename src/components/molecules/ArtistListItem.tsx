import React from 'react';
import Subtitle from '../atoms/Subtitle';
import Paragraph from '../atoms/Paragraph';
import {Button, Icon} from '@rneui/themed';
import {useForegroundColor} from '../../hooks/Colors';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

export type IArtistListItem = {
  name: string;
  areaActive: string | null;
  yearsActive: {
    begin: string | null;
    end: string | null;
  };
};

export interface ArtistListItemProps extends IArtistListItem {
  onPress?: () => void;
}

const ArtistListItem = ({
  name,
  areaActive,
  yearsActive,
  onPress,
}: ArtistListItemProps): JSX.Element => {
  const foregroundColor = useForegroundColor();

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.artistListItemContainer}>
        <View style={styles.artistListItemTextList}>
          <Subtitle>{name}</Subtitle>
          <Paragraph>
            {yearsActive.begin !== null ? yearsActive.begin : ''}–
            {yearsActive.end !== null ? yearsActive.end : ''}
          </Paragraph>
          {areaActive != null && <Paragraph>{areaActive}</Paragraph>}
        </View>
        <Button
          type="clear"
          icon={
            <Icon
              type="material"
              name="arrow-right"
              size={42}
              color={foregroundColor}
            />
          }
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  artistListItemContainer: {
    flex: 1,
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
