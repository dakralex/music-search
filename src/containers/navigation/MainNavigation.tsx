import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {Icon} from '@rneui/themed';
import SearchScreen from '../screens/SearchScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {usePalette} from '../../hooks/Colors';
import {getNavigationStyles} from '../../styles/Navigation';

const Tab = createBottomTabNavigator();

const MainNavigation = (): JSX.Element => {
  const colorPalette = usePalette();
  const navigationStyles = getNavigationStyles(colorPalette);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: navigationStyles.headerContainer,
        headerTitleStyle: navigationStyles.headerText,
        tabBarStyle: navigationStyles.tabBarContainer,
        tabBarLabelStyle: navigationStyles.tabBarText,
        tabBarActiveTintColor: navigationStyles.tabBarTextActive.color,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon type="material" name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon type="material" name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon type="material" name="star" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
