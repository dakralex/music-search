import React from 'react';
import HomeScreen from './containers/HomeScreen';
import SearchScreen from './containers/SearchScreen';
import FavoritesScreen from './containers/FavoritesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {
  useBackgroundColor,
  useForegroundColor,
  usePrimaryColor,
} from './hooks/Colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FavoritesIcon, HomeIcon, SearchIcon} from './assets/navigationIcons';

const Tab = createBottomTabNavigator();

const App = (): JSX.Element => {
  const primaryColor = usePrimaryColor();
  const backgroundColor = useBackgroundColor();
  const foregroundColor = useForegroundColor();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {backgroundColor: backgroundColor},
          headerTitleStyle: {color: primaryColor, fontSize: 24},
          tabBarStyle: {
            backgroundColor: backgroundColor,
          },
          tabBarLabelStyle: {color: foregroundColor},
          tabBarActiveTintColor: primaryColor,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{tabBarIcon: props => <HomeIcon {...props} />}}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{tabBarIcon: props => <SearchIcon {...props} />}}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{tabBarIcon: props => <FavoritesIcon {...props} />}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
