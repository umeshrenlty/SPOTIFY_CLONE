//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const MyComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text></Text>
      </View>
    </View>
  );
};

// define your styIlesI
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    backgroundColor: 'blue',
  },
});

//make this component available to the app
export default MyComponent;
