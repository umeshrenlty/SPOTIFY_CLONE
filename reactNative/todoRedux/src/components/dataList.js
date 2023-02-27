import React, {useState} from 'react';
import {View, Text, StyleSheet, Keyboard, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useDispatch, useSelector} from 'react-redux';

// create a component
import Icon from 'react-native-vector-icons/MaterialIcons';
import {deleteTodo} from '../actions';
const Task = props => {
  const [isSelected, setSelection] = useState(false);
  const array = useSelector(state => state.TodoReducers.list);
  console.log(array, 'datalist');
  const dispatch = useDispatch();
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.squre}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkboxdeleteTask}
          />
        </View>
        <Text style={styles.itemText(isSelected)}>{props.text}</Text>
      </View>
      <View style={styles.cicular}>
        <TouchableOpacity
          style={styles.close}
          onPress={() => dispatch(deleteTodo(props.id))}>
          <Icon name="delete" size={20} color="#900" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 12,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  squre: {
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  close: {
    flexDirection: 'row',
  },
  cicular: {
    // width: 12,
    // height: 12
    borderColor: '#55BC56',
    borderWidth: 2,
    borderRadius: 5,
  },
  itemText: isSelected => {
    const decoration = isSelected ? 'line-through' : 'none';
    return {
      width: '70%',
      textDecorationLine: decoration,
      textDecorationStyle: 'solid',
      color: 'black',
    };
  },
});

//make this component available to the app
export default Task;
