import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const styleSheet = () => {
  return (
    <View style={styles.container} >
        <ScrollView>
      <Text style={styles.title}>Umesh Sahoo</Text>
      <Text style={styles.title}>Sangram Dev</Text>
      <Text style={styles.title}>Pratistha Mishra</Text>
      <Text style={styles.title}>Amar Kumar</Text>
      <Text style={styles.title}>Umesh Sahoo</Text>
      <Text style={styles.title}>Sangram Dev</Text>
      <Text style={styles.title}>Pratistha Mishra</Text>
      <Text style={styles.title}>Amar Lat Kumar</Text>
      <Text style={styles.title}>Sangram Dev</Text>
      <Text style={styles.title}>Pratistha Mishra</Text>
      <Text style={styles.title}>Amar Lat Kumar</Text>
      <Text style={styles.title}>Sangram Dev</Text>
      <Text style={styles.title}>Pratistha Mishra</Text>
      <Text style={styles.title}>Amar Lat Kumar</Text>
      <Text style={styles.title}>Sangram Dev</Text>
      <Text style={styles.title}>Pratistha Mishra</Text>
      <Text style={styles.title}>Amar Lat Kumar</Text>
      </ScrollView>
    </View>
  )
}

export default styleSheet

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:24,
    backgroundColor:"#f9c2ff"
  },
  title:
  {
    marginTop:16,
    paddingVertical:8,
    borderWidth:4,
    borderColor:'black',
    borderRadius:10,
    backgroundColor: "#933bf7",
    color:'#20232a',
    color:'#fff',
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold'


  }



})