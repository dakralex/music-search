import React from 'react';
import {Text} from 'react-native';
import {useForegroundColor} from '../../hooks/Colors';

type SubtitleProps = {
  color?: string | null;
  children: string | string[];
};

const Subtitle = ({color = null, children}: SubtitleProps) => {
  const defaultColor = useForegroundColor();

  color ??= defaultColor;

  return (
    <Text style={{color: color, fontSize: 21, marginBottom: 4}}>{children}</Text>
  );
};

export default Subtitle;
