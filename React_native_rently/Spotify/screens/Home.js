import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SIZES, COLORS} from '../constants';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Header from '../components/Header';
const Home = ({navigation}) => {
  return (
    <View>
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
