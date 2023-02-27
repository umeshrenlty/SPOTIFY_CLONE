import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View, Text} from 'react-native';

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.hello}>
      <Text> enter the name:</Text>
      <TextInput
        multiline
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Text> name:{text}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  hello: {
    backroundColor: 'red',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default UselessTextInput;
