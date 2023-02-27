//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

// create a component
const MyComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/login.png')} />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={email => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={pass => setPassword(pass)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder=" confrim Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={pass => setRepassword(pass)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_btn}>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.login_btn}>
        <Text>Login</Text>
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
  },
  image: {
    width: 120,
    height: 150,
    marginBottom: 30,
  },
  inputView: {
    borderRadius: 50,
    width: '70%',
    backgroundColor: '#ffc0cb',
    height: 70,
    marginBottom: 20,
    alignItems: 'center',
  },
  TextInput: {
    fontSize: 16,
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_btn: {
    height: 30,
    fontSize: 16,
  },
  login_btn: {
    backgroundColor: '#FF1493',
    width: '80%',
    marginTop: 40,
    borderRadius: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default MyComponent;
