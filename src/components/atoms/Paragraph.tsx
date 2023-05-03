import React from 'react';
import {Text} from 'react-native';
import {useForegroundColor} from '../../hooks/Colors';

type ParagraphProps = {
  color?: string | null;
  children: string | string[];
};

const Paragraph = ({color = null, children}: ParagraphProps) => {
  const defaultColor = useForegroundColor();

  color ??= defaultColor;

  return (
    <Text style={{color: color, fontSize: 16, marginBottom: 2}}>{children}</Text>
  );
};

export default Paragraph;
