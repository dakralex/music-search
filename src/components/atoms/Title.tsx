import React from 'react';
import {Text} from 'react-native';
import {TextProps} from './Paragraph';
import {usePrimaryColor} from '../../hooks/Colors';

const Title = ({
  color,
  fontSize = 24,
  fontWeight = 'normal',
  children,
}: TextProps): JSX.Element => {
  const defaultColor = usePrimaryColor();

  color ??= defaultColor;

  return (
    <Text
      style={{
        color: color,
        fontSize: fontSize,
        fontWeight: fontWeight,
        marginBottom: 8,
      }}>
      {children}
    </Text>
  );
};

export default Title;
