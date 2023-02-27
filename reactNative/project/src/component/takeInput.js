import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

const TakeData = () => {
  const [enterText, setEnter] = useState('');
  const [courseGoals, setList] = useState([]);
  function changeData(enteredText) {
    setEnter(enteredText);
    console.log(enterText);
  }
  function addText() {
    setList(x => [...x, enterText]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.header}>
        <Text style={styles.txt}>Note Book</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="your current task!"
          onChangeText={changeData}
        />

        <Button style={styles.btn} title="Add Task" onPress={addText} />
      </View>
      <View style={styles.taskContainer}>
        <Text style={styles.list}>Item List</Text>
        {courseGoals.map(d => (
          <Text style={styles.newAdd} key={d}>
            {d}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default TakeData;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },

  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: '70%',
    marginRight: 8,
    padding: 8,
    borderRadius: 10,
  },
  taskContainer: {
    flex: 5,
    backgroundColor: '#e8e8e8',
    borderRadius: 30,
    padding: 20,
  },
  txt: {
    marginBottom: 20,
    color: '#000000',
    fontSize: 24,
    fontWeight: '700',
    borderBottomWidth: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  newAdd: {
    color: 'black',
    padding: 2,
    paddingHorizontal: 2,
    fontWeight: '700',
    fontSize: 18,
  },
  list: {
    color: 'black',
    padding: 2,
    paddingHorizontal: 2,
    fontWeight: '700',
    fontSize: 18,
    alignSelf: 'center',
    borderBottomWidth: 4,
  },
});
