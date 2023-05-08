import React from 'react';
import {StyleSheet, View} from 'react-native';
import Paragraph from './Paragraph';
import {NAME, VERSION} from '../../AppConstants';
import {useGrayColor} from '../../hooks/Colors';

const AppInformation = () => {
  const grayColor = useGrayColor();

  return (
    <View style={styles.appInformationContainer}>
      <Paragraph fontSize={12} color={grayColor}>
        {`${NAME} ${VERSION}`}
      </Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  appInformationContainer: {
    marginTop: 'auto',
    alignItems: 'center',
  },
});

export default AppInformation;
