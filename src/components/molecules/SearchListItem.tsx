import React from 'react';
import Paragraph from '../atoms/Paragraph';
import {StyleProp, ViewStyle} from 'react-native';

type SearchListItemProps = {
  children: string;
  containerStyle: StyleProp<ViewStyle>;
};

const SearchListItem = ({children}: SearchListItemProps): JSX.Element => {
  return <Paragraph>{children}</Paragraph>;
};

export default SearchListItem;
