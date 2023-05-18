import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SIZES} from '../constants';

import Header from '../components/Header';
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SIZES.paddingTop,
    backgroundColor: 'black',
    width: '100%',
  },
});
