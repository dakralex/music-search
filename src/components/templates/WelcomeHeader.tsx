import React from 'react';
import Title from '../atoms/Title';
import {NAME} from '../../AppConstants';
import Subtitle from '../atoms/Subtitle';
import {StyleSheet, View} from 'react-native';

const WelcomeHeader = () => {
  return (
    <View style={styles.welcomeHeaderContainer}>
      <Title fontSize={36} fontWeight="bold">
        Welcome to {NAME}!
      </Title>
      <Subtitle>The place to find your favorite artists.</Subtitle>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeHeaderContainer: {
    marginTop: 16,
  },
});

export default WelcomeHeader;
