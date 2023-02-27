import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';

const Count = () => {
  const [num, increment] = useState(0);
  const [data, setData] = useState(0);
  useEffect(() => {}, [num]);

  return (
    <View style={styles.main}>
      <Text style={styles.txt}>welcome to counter App</Text>
      <View style={styles.box}>
        <TextInput
          name="data"
          onChange={Number => setData(Number)}
          style={styles.input}
          value={Number}
          placeholder="ENTER VALUE"
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            increment(data);
          }}>
          <Text style={styles.txt}>enter value</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.txt}>intial value is {num}</Text>
      <View style={styles.box}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            increment(num + 1);
            console.log(typeof num);
          }}>
          <Text style={styles.txt}>Increase</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.txt}>Increased value is {num}</Text>

      <View style={styles.box}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            if (num > 0) increment(num - 1);
          }}>
          <Text style={styles.txt}>decrease</Text>
        </TouchableOpacity>
      </View>
      {/* <Text style={styles.txt}>decreased VALUE IS {num}</Text> */}
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
  input: {
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
  },
});
export default Count;
