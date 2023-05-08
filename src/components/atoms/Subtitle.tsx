import React from 'react';
import {Text} from 'react-native';
import {TextProps} from './Paragraph';
import {useForegroundColor} from '../../hooks/Colors';

const Subtitle = ({
  color,
  fontSize = 21,
  fontWeight = 'normal',
  children,
}: TextProps): JSX.Element => {
  const defaultColor = useForegroundColor();

  color ??= defaultColor;

  return (
    <Text
      style={{
        color: color,
        fontSize: fontSize,
        fontWeight: fontWeight,
        marginBottom: 4,
      }}>
      {children}
    </Text>
  );
};

export default Subtitle;
