import React from 'react';
import {store} from './AppStore';
import {Provider as StoreProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigation from './containers/navigation/MainNavigation';

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <StoreProvider store={store}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </StoreProvider>
    </SafeAreaProvider>
  );
};

export default App;
