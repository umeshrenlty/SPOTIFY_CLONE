import {StyleSheet, Text, View, ScrollView, Keyboard} from 'react-native';
import React, {useState} from 'react';
import TaskInputField from './taskInputField';
import TaskItem from './taskItem';
import {useSelector} from 'react-redux';
const App = () => {
  const [courseGoals, setList] = useState([]);


  const addTask = task => {
    // if (task == null) return;
    setList([...courseGoals, task]);
    Keyboard.dismiss();
  };
  const deleteTask = deleteIndex => {
    setList(courseGoals.filter((value, index) => index != deleteIndex));
  };
  return (
    <View style={styles.appContainer}>
      <TaskInputField addTask={addTask} />

      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}>Today's tasks</Text>
          <View style={styles.items}>
            {courseGoals?.map((item, index) => {
              return (
                <View key={index}>
                  <TaskItem
                    index={index + 1}
                    text={item}
                    deleteTask={() => deleteTask(index)}
                    editTask={() => editTask(index)}
                  />
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 16,
    backgroundColor: '#3e79b0',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    marginBottom: 20,
    color: '#000000',
    fontSize: 24,
    fontWeight: '700',
    borderBottomWidth: 1,
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});
