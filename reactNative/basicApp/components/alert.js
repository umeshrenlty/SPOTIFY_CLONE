import { StyleSheet, Text,Button,View,Alert } from 'react-native'
import React,{useState} from 'react'

const Alert = () => {

    const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );


  return (
    <View style={styles.container}>
         <Button title={"2-Button Alert"} onPress={createTwoButtonAlert} />  
    </View>
  )
}

export default Alert

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        justifyContent:"space-around",
        alignItems:"center"
    }
});