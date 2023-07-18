import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../../../screen';
import { ROUTE } from '../../../utils';
const Drawer = createDrawerNavigator();

function RootDrawer() {
    return (
            <Drawer.Navigator>
                <Drawer.Screen name={ROUTE.HOME_SCREEN} component={HomeScreen} />
                <Drawer.Screen name="ArticleScreen" component={ArticleScreen} />
            </Drawer.Navigator>
    );
}
export default RootDrawer

function ArticleScreen() { return (<></>) }