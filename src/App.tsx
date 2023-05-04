import React from 'react';
import {store} from './AppStore';
import {usePalette} from './hooks/Colors';
import HomeScreen from './containers/HomeScreen';
import SearchScreen from './containers/SearchScreen';
import {Provider as StoreProvider} from 'react-redux';
import {getNavigationStyles} from './styles/Navigation';
import FavoritesScreen from './containers/FavoritesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FavoritesIcon, HomeIcon, SearchIcon} from './assets/navigationIcons';

const Tab = createBottomTabNavigator();

const App = (): JSX.Element => {
  const colorPalette = usePalette();
  const navigationStyles = getNavigationStyles(colorPalette);

  return (
    <SafeAreaProvider>
      <StoreProvider store={store}>
        <NavigationContainer>
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
      </StoreProvider>
    </SafeAreaProvider>
  );
};

export default App;
