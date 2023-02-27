import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
const data = [];
const Products = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.conatainer}>
      <View style={{flex: 1}}>
        <View style={styles.details}>
          <Text></Text>
          <TouchableOpacity></TouchableOpacity>
        </View>
      </View>
      <FlatList></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  details: {
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
