import React, {useReducer} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
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
      <Text style={styles.txt}>{state}</Text>
      <Button onPress={() => dispatch({type: 'INCREMENT'})} title="increase" />
      <Button onPress={() => dispatch({type: 'DECREMENT'})} title="decrease" />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#363b78',
  },
  box: {
    marginTop: 20,
  },
  btn: {
    elevation: 8,
    backgroundColor: '#34c3f7',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  txt: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
export default Count;
