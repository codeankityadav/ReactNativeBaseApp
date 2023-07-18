import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { ROUTE } from '../utils'

const SplashScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Go To Home" onPress={() => navigation.navigate(ROUTE.ROOT_DRAWER)} />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})