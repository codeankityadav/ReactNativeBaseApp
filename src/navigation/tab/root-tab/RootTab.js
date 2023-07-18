import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../../../screen';
import { AntDesign, MaterialIcons } from '../../../utils/constant/Vector';
import { COLORS, FONT_FAMILY, rw } from '../../../utils';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

const RootTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: FONT_FAMILY.POPPINS.EXTRA_BOLD_ITALIC,
                    textTransform: 'capitalize'
                },
                tabBarActiveTintColor: COLORS.PRIMARY,
                tabBarInactiveTintColor: COLORS.PRIMARY,
                tabBarPressColor: COLORS.PRIMARY,
                tabBarIndicatorStyle: {
                    backgroundColor: COLORS.PRIMARY,
                },
            }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ tintColor = COLORS.PRIMARY }) => {
                        return (
                            <AntDesign name="home" size={rw(5)} color={tintColor} />
                        )
                    }
                }} />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ tintColor = COLORS.PRIMARY }) => {
                        return (
                            <MaterialIcons name="category" size={rw(5)} color={tintColor} />
                        )
                    }
                }} />
        </Tab.Navigator>
    )
}

export default RootTab

const SettingsScreen = () => {
    return (
        <Text>SettingsScreen</Text>
    )
}