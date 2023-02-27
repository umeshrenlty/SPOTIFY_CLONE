//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Navigation from './src/components/navigation';
import Tab from './src/components/tab';
import Drawer from './src/components/drawer';
// create a component
const MyComponent = () => {
  return (
    <>
      <Navigation />
    </>
  );
};

// define your styles

//make this component available to the app
export default MyComponent;
