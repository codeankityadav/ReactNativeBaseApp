import { View, Text } from 'react-native'
import React from 'react'
import { SplashScreen } from '../../../screen'
import LoginScreen from '../../../screen/LoginScreen'
import HomeScreen from '../../../screen/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ROUTE } from '../../../utils'
import RootDrawer from '../../drawer/root-drawer/RootDrawer'

const RootNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName={ROUTE.SPLASH_SCREEN}>
            <Stack.Screen name={ROUTE.SPLASH_SCREEN} component={SplashScreen} />
            <Stack.Screen name={ROUTE.ROOT_DRAWER} component={RootDrawer} />
            <Stack.Screen name={ROUTE.HOME_SCREEN} component={HomeScreen} />
        </Stack.Navigator>

    )
}

export default RootNavigation