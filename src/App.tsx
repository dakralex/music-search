import React from 'react';
import {persistor, store} from './AppStore';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigation from './containers/navigation/MainNavigation';

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <StoreProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <MainNavigation />
          </NavigationContainer>
        </PersistGate>
      </StoreProvider>
    </SafeAreaProvider>
  );
};

export default App;
