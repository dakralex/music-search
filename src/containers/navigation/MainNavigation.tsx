import React from 'react';
import {Icon} from '@rneui/themed';
import {usePalette} from '../../hooks/Colors';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import {getNavigationStyles} from '../../styles/Navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export type TabNavigationList = {
  Home: undefined;
  Search: {initialSearchValue: string};
  Favorites: undefined;
};

const Tab = createBottomTabNavigator<TabNavigationList>();

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
        initialParams={{initialSearchValue: ''}}
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
