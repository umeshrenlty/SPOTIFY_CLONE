import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import ItemView from './src/ItemView';
const App = () => {
  const [filterData, setfilterData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    fetchPosts();
    return () => {};
  }, []);
  const renderItem = ({item}) => {
    return <ItemView data={item} />;
  };
  // const ItemSeparatorView = () => {
  //   return (
  //     <View style={{height: 0.5, width: '100%', backgroundColor: '#f01ade'}} />
  //   );
  // };
  const fetchPosts = () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    fetch(apiUrl)
      .then(response => response.json())
      .then(responseJson => {
        setfilterData(responseJson);
        setmasterData(responseJson);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const searchFilter = text => {
    console.log(text);
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.username
          ? item.username.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilterData(newData);
      setSearch(text);
    } else {
      setmasterData(masterData);
      setSearch(text);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          placeholder="Search item here..."
          style={styles.textInputStyle}
          value={search}
          underlineColorAndroid="transparent"
          onChangeText={text => searchFilter(text)}
        />
        <FlatList
          data={filterData}
          keyExtractor={(item, index) => index.toString()}
          // ItemSeparatorComponent={ItemSeparatorView}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

  textInputStyle: {
    height: 50,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderRadius: 100,
    borderColor: '#009688',
    backgroundColor: '#fff',
  },
});
