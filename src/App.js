import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { RootNavigation } from './navigation'

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>

  )
}

export default App