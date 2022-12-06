import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const ImageSet = () => {
  return (
    <View style={styles.listStyle}>

      <Text style={styles.textStyle}>this is image</Text>
      <Image
      style={styles.ImageStyle}
      source={require("/home/umeshsahoo191/reactNativeTraining/basicApp/components/asset/images.jpeg")}
      
      
      />
      <Image
      style={styles.ImageStyle}
      source={require("/home/umeshsahoo191/reactNativeTraining/basicApp/components/asset/images.jpeg")}
      
      
      />
  
    </View>
  )
};
const styles=StyleSheet.create({
    listStyle:
    {
     height:500,
     display:"flex",
     justifyContent:"center",
     alignItems:"center",

    },
    textStyle:{
        fontSize:30,
    },
    imageStyle:{
        width:300,
        height:300,
    },
})

export default ImageSet

