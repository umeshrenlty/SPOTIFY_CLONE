import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ItemView = ({data}) => {
  // console.log(data);
  const {id, name, username, email} = data;
  return (
    <View
      style={{
        flex: 1,
        height: 300,
        width: '90%',
        backgroundColor: '#a7a4f5',
        borderRadius: 20,
        margin: 15,
      }}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../src/u.png')}
          style={{
            width: 100,
            height: 100,
          }}
        />
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 50,
            marginHorizontal: 20,
            marginVertical: 10,
            width: '90%',
            height: 150,
            padding: 20,
          }}>
          <Text style={{fontSize: 18}}>Username:{username.toUpperCase()}</Text>
          <Text>{name.toUpperCase()}</Text>
          <Text>{email.toUpperCase()}</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemView;

const styles = StyleSheet.create({
  itemStyle: {
    paddingHorizontal: 10,
    borderRadius: 100,
    borderBottomColor: '#2c1af0',
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
