import {StyleSheet, Text, View} from 'react-native';
import TodoScreen from './src/components/todoScreen';
import TaskInputField from './src/components/taskInputField';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TakeData from './src/components/taskInputField';
function Completed() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}
function All() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}
const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="All"
        screenOptions={{
          headerStyle: {backgroundColor: '#085b82'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#ffe100',
          tabBarStyle: {backgroundColor: '#085b82'},
          tabBarHideOnKeyboard: 'true',
        }}>
        <Tab.Screen
          name="All"
          component={TodoScreen}
          options={{
            tabBarLabel: 'ALL',

            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Completed"
          component={Completed}
          options={{
            tabBarLabel: 'Completed',
            tabBarIcon: (color, size) => (
              <MaterialIcons name="done" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Active"
          component={All}
          options={{
            tabBarLabel: 'Active',
            tabBarIcon: (color, size) => (
              <MaterialIcons name="done" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
