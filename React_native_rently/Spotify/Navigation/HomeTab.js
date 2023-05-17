import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../screens/Search';

import Home from '../screens/Home';
import Media from '../screens/Media';
import Library from '../screens/Library';
import Authorize from '../screens/Authorize';
import Profile from '../screens/Profile';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={() => ({headerShown: false})}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Media" component={Media} />
    </Stack.Navigator>
  );
};

const LibraryStack = () => {
  return (
    <Stack.Navigator screenOptions={() => ({headerShown: false})}>
      <Stack.Screen name="Library" component={Library} />
      <Stack.Screen name="Media" component={Media} />
    </Stack.Navigator>
  );
};
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={() => ({headerShown: false})}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Media" component={Media} />
    </Stack.Navigator>
  );
};
const SearchStack = () => {
  return (
    <Stack.Navigator screenOptions={() => ({headerShown: false})}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Media" component={Media} />
    </Stack.Navigator>
  );
};

const HomeTabs = () => {
  return (
    <View style={{flex: 1, width: '100%'}}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            marginBottom: 10,
            paddingBottom: 0,
            backgroundColor: 'black',
            marginHorizontal: 12,
            borderRadius: 100,
            height: 80,
            borderTopColor: 'black',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,
          },
        })}>
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="SearchStack" component={SearchStack} />
        <Tab.Screen name="LibraryStack" component={LibraryStack} />
        <Tab.Screen name="ProfileStack" component={ProfileStack} />
      </Tab.Navigator>
    </View>
  );
};

export default HomeTabs;
