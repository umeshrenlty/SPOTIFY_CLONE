import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const flex = () => {
  return (
    <View style={[styles.container,
    {
        flexDirection:'row'
    }]}>
      <View style={{flex:1,backgroundColor:'red'}} />
      <View style={{flex:1,backgroundColor:'darkorange'}} />
      <View style={{flex:1,backgroundColor:'green'}} />

    </View>    
  )
}

export default flex

const styles = StyleSheet.create({
container:
{
    flex:1,
    padding:20,
}
})