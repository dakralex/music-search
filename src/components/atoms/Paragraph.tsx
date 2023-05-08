import React from 'react';
import {Text, TextStyle} from 'react-native';
import {useForegroundColor} from '../../hooks/Colors';

export type TextProps = {
  color?: TextStyle['color'];
  fontSize?: TextStyle['fontSize'];
  fontWeight?: TextStyle['fontWeight'];
  children: string | string[];
};

const Paragraph = ({
  color,
  fontSize = 16,
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
        marginBottom: 2,
      }}>
      {children}
    </Text>
  );
};

export default Paragraph;
