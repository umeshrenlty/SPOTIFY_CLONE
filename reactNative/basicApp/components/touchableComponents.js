import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{ useState } from 'react'

const TouchableComponents = () => {
    const [count,setCount]=useState(0);
    const onPress=()=>setCount(prevCount=>prevCount+1);
  return (

    
    <View style={styles.container}>
        <View>
            <Text  style={styles.tax}>COUNTER</Text>
        </View>
        <View style={styles.countContainer}>
            <Text style={styles.tax}>Count:{count}</Text>
        </View>
        <TouchableOpacity 
        style={styles.button}
        onPress={onPress}
        >
            <Text  style={styles.tax}>Press here</Text>

        </TouchableOpacity>
     
    </View>
  )
}

export default TouchableComponents

const styles = StyleSheet.create({
container:
{
    flex:1,
    justifyContent:'center',
    paddingHorizontal:10,
    backgroundColor:"#fff",
    alignItems:'center',
},
button:
{
    alignItems:'center',
    backgroundColor:"#d07aeb",
    width:'80%',
    padding:10,
  
    
},
tax:
{
fontSize:30,
color:'blue',

},
countContainer:{
alignItems:"center",
padding:10,
fontSize:30,




}


})
