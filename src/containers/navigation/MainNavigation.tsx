import React from 'react';
import TabNavigation from './TabNavigation';
import {usePalette} from '../../hooks/Colors';
import DetailsScreen from '../screens/DetailsScreen';
import {getNavigationStyles} from '../../styles/Navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type MainNavigationList = {
  Root: undefined;
  Details: {artistMbid: string};
};

const Stack = createNativeStackNavigator<MainNavigationList>();

const MainNavigation = () => {
  const colorPalette = usePalette();
  const navigationStyles = getNavigationStyles(colorPalette);

  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={{
        headerStyle: navigationStyles.headerContainer,
        headerTitleStyle: navigationStyles.headerText,
      }}>
      <Stack.Screen
        name="Root"
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
