import React from 'react';
import {Text} from 'react-native';
import {useForegroundColor} from '../../hooks/Colors';

export type TextProps = {
  color?: string | undefined;
  fontSize?: number | undefined;
  children: string | string[];
};

const Paragraph = ({
  color,
  fontSize = 16,
  children,
}: TextProps): JSX.Element => {
  const defaultColor = useForegroundColor();

  color ??= defaultColor;

  return (
    <Text style={{color: color, fontSize: fontSize, marginBottom: 2}}>
      {children}
    </Text>
  );
};

export default Paragraph;
