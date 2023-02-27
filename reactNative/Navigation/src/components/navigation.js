// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/profileScreen';
import LoginScreen from '../screens/loginScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feed from '../screens/TabNaviagtion/Feed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Messages from '../screens/TabNaviagtion/Message';
import Drawer from '../components/drawer';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function Nested() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Messages') {
            iconName = focused ? 'chat' : 'chat';
          } else if (route.name === 'Feed') {
            iconName = focused ? 'stream' : 'stream';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{headerTitleAlign: 'center'}}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{headerTitleAlign: 'center'}}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{presentation: 'modal'}}>
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Profile',
            headerStyle: {
              backgroundColor: '#ffa42e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: '#ff549b',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Nested"
          component={Nested}
          options={{
            title: 'DashBoard',
            headerStyle: {
              backgroundColor: '#ff549b',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Drawer"
          component={Drawer}
          options={{
            title: 'Drawer',
            headerStyle: {
              backgroundColor: '#ff549b',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
