import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '../utils/constant/Vector'
import Lottie from 'lottie-react-native'

const HomeScreen = () => {
  return (
    <View>
      <Lottie source={require('../asset/lottie/loading.json')} duration={5000} autoPlay loop />
      <AntDesign name="rocket1" size={30} color="#900" />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})