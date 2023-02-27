//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

// create a component

const MyComponent = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={styles.container}>
      <View style={styles.desgin}>
        <Image style={styles.img} source={require('../assets/welcome.png')} />
        <Text style={styles.txt}>Namaste {route.params.name}</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Nested')}
        style={styles.btn}>
        <Text style={styles.txt}>DashBoard</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Drawer')}
        style={styles.btn}>
        <Text style={styles.txt}>Drawer</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btn}>
        <Text style={styles.txt}>Go Back</Text>
      </TouchableOpacity> */}
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: 'center',
    fontFamily: 'serif',
    alignItems: 'center',
  },
  desgin: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 25,
    marginLeft: 20,
    marginBottom: 10,
  },
  img: {
    width: 150,
    height: 200,
    objectFit: 'cover',
    marginBottom: 20,
  },
  btn: {
    marginTop: 5,
    backgroundColor: '#ffc021',
    borderRadius: 50,
    width: '50%',
    color: 'black',
    alignSelf: 'center',
    marginBottom: 20,
  },
});

//make this component available to the app
export default MyComponent;
