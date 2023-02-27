import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Feed from '../screens/TabNaviagtion/Feed';
import Messages from '../screens/TabNaviagtion/Message';
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Messages" component={Messages} />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
