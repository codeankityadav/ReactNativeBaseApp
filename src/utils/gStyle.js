import { StyleSheet } from 'react-native'
import { COLORS } from './constant/Color'


const gStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WHITE
    },
    containerCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.WHITE
    },
})
export { gStyles }