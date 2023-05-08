import React from 'react';
import {Icon} from '@rneui/themed';
import Paragraph from '../atoms/Paragraph';
import {useForegroundColor} from '../../hooks/Colors';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

type SearchListItemProps = {
  children: string;
  onPress?: () => void;
  containerStyle: StyleProp<ViewStyle>;
};

const SearchListItem = ({
  children,
  onPress,
}: SearchListItemProps): JSX.Element => {
  const foregroundColor = useForegroundColor();

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.searchListItemContainer}>
        <Icon type="material" name="search" size={18} color={foregroundColor} />
        <Paragraph>{children}</Paragraph>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  searchListItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
    paddingVertical: 8,
  },
});

export default SearchListItem;
