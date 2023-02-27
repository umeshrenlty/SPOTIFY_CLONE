import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, ScrollView } from 'react-native';

const List = () => {
  const [people, seePeople] = useState([
    { name: 'umesh', key: '1' },
    { name: 'pawan', key: '2' },
    { name: 'mavan', key: '3' },
    { name: 'ravan', key: '4' },
    { name: 'sayan', key: '5' },
    { name: 'rishi', key: '6' },
    { name: 'ravdddan', key: '14' },
    { name: 'sadddyan', key: '15' },
    { name: 'ridddshi', key: '16' },
  ]);
  return (
    <View style={styles.container}>


      <FlatList
      numColumns={2  }
      keyExtractor={(item)=>item.id}
        data={people}
        renderItem={
          ({ item }) => (
            <Text style={styles.item}>{item.name}</Text>
          )
        }

      />

      {

        // <ScrollView>{
        //   people.map((item) => (
        //     <View key={item.key}>
        //       <Text style={styles.item}>{item.name}</Text>
        //     </View>
        //   )
        //   )

        // }
        // </ScrollView>
        
        }
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal:10,
    flex:1,
    marginTop:20,
  }
}) 
export default List;