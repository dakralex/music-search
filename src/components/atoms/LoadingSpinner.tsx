import React from 'react';
import {Button} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';

const LoadingSpinner = () => {
  return (
    <View style={styles.loadingSpinnerContainer}>
      <Button type="clear" title="Loading" loading />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingSpinnerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingSpinner;
