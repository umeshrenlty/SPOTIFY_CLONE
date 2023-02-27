import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const App = () => { 
  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.topBar}>
          <Text style={styles.topBarTitleText}>React Native Scanner</Text>
        </View>
      </SafeAreaView>
      <View style={styles.caption}>
        <Text style={styles.captionTitleText}>
          {' '}
          Welcome To React-Native-Camera Tutorial
        </Text>
      </View>
      <View style={styles.cameraControl}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Click On Camera</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  topBar: {
    height: 50,
    backgroundColor: '#62d1bc', // green
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarTitleText: {
    color: '#ffffffff', // white
    fontSize: 20,
  },
  caption: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captionTitleText: {
    color: '#121B0D', // black
    fontSize: 16,
    fontWeight: '600',
  },
});
export default App;
