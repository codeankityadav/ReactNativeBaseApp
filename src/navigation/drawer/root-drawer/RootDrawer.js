import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../../../screen';
import { COLORS, FONT_FAMILY, ROUTE } from '../../../utils';
import RootTab from '../../tab/root-tab/RootTab';
import RootDrawerContent from './RootDrawerContent';
const Drawer = createDrawerNavigator();

function RootDrawer() {
    return (
        <Drawer.Navigator
        screenOptions={{
            // headerShown: false,
            drawerActiveBackgroundColor: COLORS.PRIMARY,
            drawerActiveTintColor: COLORS.WHITE,
            drawerInactiveTintColor: COLORS.PRIMARY,
            drawerLabelStyle: {
                fontFamily: FONT_FAMILY.POPPINS.EXTRA_BOLD_ITALIC
            }
        }}
        drawerContent={props => <RootDrawerContent {...props} />}>
            <Drawer.Screen name={ROUTE.ROOT_TAB} component={RootTab} />
            <Drawer.Screen name="ArticleScreen" component={ArticleScreen} />
        </Drawer.Navigator>
    );
}
export default RootDrawer

function ArticleScreen() { return (<></>) }