import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="FeedScreen" component={Feed} />
        <Drawer.Screen name="ArticleScreen" component={ArticleScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default MyDrawer
function Feed() { return (<></>) }
function ArticleScreen() { return (<></>) }