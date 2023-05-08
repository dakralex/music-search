import React from 'react';
import {View} from 'react-native';
import Title from '../atoms/Title';
import Subtitle from '../atoms/Subtitle';

const WelcomeHeader = () => {
  return (
    <View style={{marginTop: 16}}>
      <Title fontSize={36} fontWeight="bold">
        Welcome to MusicSearch!
      </Title>
      <Subtitle>The place to find your favorite artists.</Subtitle>
    </View>
  );
};

export default WelcomeHeader;
