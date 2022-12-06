import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const flexDirection = () => {
  return (
    <View>
     <View style={styles.parentView}>
      <Text style={[styles.childText,styles.commonStyle]}>Box1</Text>
      <Text style={[styles.childText2,styles.commonStyle]}>Box2</Text>
      <Text style={[styles.childText3,styles.commonStyle]}>Box3</Text>
      <Text style={[styles.childText4,styles.commonStyle]}>Box4</Text>
      <Text style={[styles.childText5,styles.commonStyle]}>Box5</Text>
 </View>
    </View>
  )
}

export default flexDirection

const styles = StyleSheet.create({
parentView:{
//   flexDirection:'column',
// justifyContent:'space-evenly',
flexDirection:'row',
justifyContent:'center',
alignItems:'center',



height:500,
marginTop:100,
width:'95%',
marginHorizontal:10,
borderWidth:3,
borderColor:"#097366",
},
childText:{
backgroundColor:"blue",
borderColor:'green',
borderWidth:1,
color:'#fff',
},
commonStyle:
{
  
  width:50,
  height:100,
},
childText:{
  backgroundColor:"green",
  borderColor:'green',
  borderWidth:1,
  color:'#fff',
  },
childText2:{
  backgroundColor:"orange",
  borderColor:'green',
  borderWidth:1,
  color:'#fff',
  },
childText3:{
  backgroundColor:"grey",
  borderColor:'green',
  borderWidth:1,
  color:'#fff',
  alignSelf:'flex-start',
  },
childText4:{
  backgroundColor:"red",
  borderColor:'green',
  borderWidth:1,
  color:'#fff',
  },
childText5:{
  backgroundColor:"olive",
  borderColor:'green',
  borderWidth:1,
  color:'#fff',
  },

})