//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');

import {useNavigation} from '@react-navigation/native';
// create a component
import LottieView from 'lottie-react-native';
const MyComponent = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/wel.json')}
        autoPlay
        style={{height: 250, width: 200}}
      />
      {/* <Image style={styles.image} source={require('../assets/login.png')} /> */}

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="#003f5c"
          value={name}
          onChangeText={name => setName(name)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          value={password}
          onChangeText={pass => setPassword(pass)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_btn}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.login_btn}
        onPress={() => {
          navigation.navigate('Profile', {
            name: name,
            password: password,
          });
        }}>
        <Text style={styles.login_text}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: width,
    height: height,
  },
  image: {
    width: 120,
    height: 150,
    marginBottom: 10,
    marginTop: 5,
  },
  inputView: {
    borderRadius: 40,
    width: '70%',
    backgroundColor: '#ffc0cb',
    height: 50,
    marginBottom: 20,
    alignItems: 'center',
  },
  TextInput: {
    fontSize: 16,
    height: 50,
    flex: 1,
    padding: 10,
  },
  forgot_btn: {
    height: 30,
    fontSize: 16,
    fontWeight: 'bold',
  },
  login_btn: {
    backgroundColor: '#ff549b',
    width: '80%',
    marginTop: 40,
    fontSize: 16,
    borderRadius: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login_text: {
    fontSize: 16,
  },
});

//make this component available to the app
export default MyComponent;
