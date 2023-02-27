import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
const postUser = () => {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify({
      title: 'Umesh sahoo',
      body: 'hello',
      userId: 4,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
    .then(response => response.json())

    .then(json => console.log(json));
};

const getUsers = () => {
  const requestOptions = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  };

  fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
    .then(response => response.json())
    .then(json => {
      console.log('Fetch API Response', json);
    })
    .catch(error => {
      console.error(error);
    });
};

const UpdateUser = () => {
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization:
        'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408',
    },
    body: JSON.stringify({
      email: 'reddy_pres_giri@kirlin.info',
      name: 'Pres. Giri Reddy',
      gender: 'female',
      status: 'active',
    }),
  };

  fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
    .then(response => response.json())
    .then(json => {
      console.log('Fetch API Response', json);
    })
    .catch(error => {
      console.error(error);
    });
};

const deleteUser = () => {
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization:
        'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408',
    },
    body: JSON.stringify({
      title: 'Umesh sahoo',
      body: 'hello',
      userId: 4,
    }),
  };

  fetch('https://gorest.co.in/public/v1/users/8986', requestOptions)
    .then(response => response.ok)
    .catch(error => {
      console.error(error);
    });
};

const Fetch = () => {
  return (
    <View>
      <Text style={{fontWeight: 'bold', fontSize: 20, padding: 10, margin: 10}}>
        Fetch API for your networking Data.
      </Text>
      <View
        style={{margin: 10, marginTop: 50, padding: 20, marginHorizontal: 16}}>
        <Button title="POST: Create User" onPress={() => postUser()} />
      </View>

      <View
        style={{margin: 10, marginTop: 20, padding: 20, marginHorizontal: 16}}>
        <Button title="Get: Get UserList" onPress={() => getUsers()} />
      </View>

      <View
        style={{margin: 10, marginTop: 20, padding: 20, marginHorizontal: 16}}>
        <Button title="PUT / PATCH: Update user" onPress={() => UpdateUser()} />
      </View>

      <View
        style={{margin: 10, marginTop: 20, padding: 20, marginHorizontal: 16}}>
        <Button title="Delete: Delete user" onPress={() => deleteUser()} />
      </View>
    </View>
  );
};

export default Fetch;
