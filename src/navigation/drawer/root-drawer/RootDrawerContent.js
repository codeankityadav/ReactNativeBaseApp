import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, rw } from '../../../utils'
import { FontAwesome } from '../../../utils/constant/Vector'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const RootDrawerContent = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <FontAwesome name="user-circle" size={rw(10)} color={COLORS.PRIMARY} />
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    )
}

export default RootDrawerContent

const styles = StyleSheet.create({})