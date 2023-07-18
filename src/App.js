import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { RootNavigation } from './navigation'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { persistor, store } from './redux/store';

const App = () => {
  return (

    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>

  )
}

export default App