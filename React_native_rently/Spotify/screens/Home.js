import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {SIZES} from '../constants';

import Header from '../components/Header';
import {useDispatch} from 'react-redux';
import {getUserPlaylists} from '../Redux/action';
const Home = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserPlaylists('15'));
  });
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
