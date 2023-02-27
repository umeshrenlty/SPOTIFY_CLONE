import React, {useReducer} from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import {createStoreHook} from 'react-redux';
const redux = require('redux');
const createStore = redux.createStore;
const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const Count = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View style={styles.main}>
      <Text>Increment And Decrement</Text>
      <Text style={styles.txt}>{state}</Text>
      {/* <Button onPress={() => dispatch({type: 'INCREMENT'})} title="increase" />
      <Button onPress={() => dispatch({type: 'DECREMENT'})} title="decrease" /> */}
      <View style={styles.box}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => dispatch({type: 'INCREMENT'})}>
          <Text style={styles.txt}>Increase</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => dispatch({type: 'DECREMENT'})}>
          <Text style={styles.txt}>decrease</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  box: {
    marginTop: 2,
  },
  btn: {
    marginTop: 20,
    elevation: 8,
    backgroundColor: '#34c3f7',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  txt: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
export default Count;
const store = createStore(reducer);
console.log('intial state', store.getState());
store.subscibe(() => console.log('update state', store.getState()));
store.dispatch();
