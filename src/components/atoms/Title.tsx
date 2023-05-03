import React from 'react';
import {Text} from 'react-native';
import {usePrimaryColor} from '../../hooks/Colors';

type TitleProps = {
  color?: string | null;
  children: string | string[];
};

const Title = ({color = null, children}: TitleProps) => {
  const defaultColor = usePrimaryColor();

  color ??= defaultColor;

  return (
    <Text style={{color: color, fontSize: 24, marginBottom: 8}}>
      {children}
    </Text>
  );
};

export default Title;
