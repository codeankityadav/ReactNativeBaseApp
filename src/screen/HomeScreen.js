import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { AntDesign } from '../utils/constant/Vector'
import Lottie from 'lottie-react-native'
import { FONT_FAMILY } from '../utils'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../redux/slice/homeSlice'

const HomeScreen = () => {

  const { loading } = useSelector(state => state.home)
  console.log('loading', loading)
  const dispatch = useDispatch()

  const setAsyncStorage = async () => {
    try {
      await AsyncStorage.setItem('id', "ankit");
    } catch (error) {
    }
  }
  const getAsyncStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('id');
      if (value !== null) {
        console.log(value);
      }
    } catch (error) {
      console.log('error', error)
    }
  }


  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Lottie source={require('../asset/lottie/loading.json')} duration={5000} autoPlay loop />
      <AntDesign name="rocket1" size={30} color="#900" />
      <Text className="text-amber-400" style={{ fontFamily: FONT_FAMILY.POPPINS.EXTRA_BOLD_ITALIC }}>Skip</Text>
      <Button title="SET STORAGE" onPress={() => setAsyncStorage()} />
      <Button title="GET STORAGE" onPress={() => getAsyncStorage()} />
      <Button title="SET REDUX" onPress={() => dispatch(setLoading(!loading))} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})