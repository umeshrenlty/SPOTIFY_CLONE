import {StyleSheet, Text, View, FlatList} from 'react-native';
import {SIZES} from '../constants';
import React from 'react';

const HorizontalCardContainer = () => {
  return (
    <View style={styles.container}>
      <Text>HorizontalCardContainer</Text>
    </View>
  );
};

export default HorizontalCardContainer;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 5,
  },
});
