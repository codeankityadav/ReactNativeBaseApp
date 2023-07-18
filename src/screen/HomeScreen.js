import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '../utils/constant/Vector'
import Lottie from 'lottie-react-native'
import { FONT_FAMILY } from '../utils'

const HomeScreen = () => {
  return (
    <View>
      <Lottie source={require('../asset/lottie/loading.json')} duration={5000} autoPlay loop />
      <AntDesign name="rocket1" size={30} color="#900" />
      <Text className="text-amber-400" style={{fontFamily : FONT_FAMILY.POPPINS.EXTRA_BOLD_ITALIC}}>Skip</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})