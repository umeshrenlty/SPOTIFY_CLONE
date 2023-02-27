import {StyleSheet, Text, View, ScrollView, Keyboard} from 'react-native';
import React, {useState} from 'react';
import TaskInputField from './taskInputField';
import DataList from './dataList';
import {deleteTodo} from '../actions/index';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
const App = () => {
  const [inputData, setInputData] = useState('');
  const courseGoals = useSelector(state => state.TodoReducers.list);
  console.log('data', courseGoals);
  console.log(120, courseGoals);
  const dispatch = useDispatch();

  return (
    <View style={styles.appContainer}>
      <TaskInputField />

      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}>Today's tasks</Text>
          <View style={styles.items}>
            {courseGoals?.map(ele => {
              return (
                <View key={ele.id}>
                  <DataList id={ele.id} text={ele.data} />
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
    backgroundColor: '#21cbff',
    height: '100%',
    width: '100%',
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
    fontWeight: '700',
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    color: 'black',
  },
});
