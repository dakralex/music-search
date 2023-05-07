import React from 'react';
import Paragraph from '../atoms/Paragraph';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';

type SearchListItemProps = {
  children: string;
  onPress?: () => void;
  containerStyle: StyleProp<ViewStyle>;
};

const SearchListItem = ({
  children,
  onPress,
}: SearchListItemProps): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Paragraph>{children}</Paragraph>
    </TouchableOpacity>
  );
};

export default SearchListItem;
