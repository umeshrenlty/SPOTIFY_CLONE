import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import React, {useState} from 'react';
import {addTodo} from '../actions';
import {useSelector} from 'react-redux';

const TakeData = props => {
  const [enterValue, setValue] = useState(' ');
  const dispatch = useDispatch();
  return (
    <View style={styles.appContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <View style={styles.header}>
          <Text style={styles.txt}>Note Book</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={enterValue}
            placeholder="your curreent task!"
            onChangeText={enterValue => setValue(enterValue)}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              dispatch(addTodo(enterValue), setValue(''));
            }}>
            <Text style={styles.btnText}>Add Task</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default TakeData;

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 20,
    paddingTop: 25,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',

    padding: 10,
  },
  textInput: {
    borderWidth: 1,

    borderColor: '#edeef2',
    width: '70%',
    color: '#242322',
    marginRight: 8,
    padding: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  writeTaskWrapper: {},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    marginBottom: 10,
    color: 'black',
    fontSize: 24,
    fontWeight: '700',
    borderBottomWidth: 1,
  },
  btn: {
    width: 80,
    backgroundColor: '#11b8f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
  },
  btnText: {
    color: '#fff',
    fontWeight: '500',
  },
});
