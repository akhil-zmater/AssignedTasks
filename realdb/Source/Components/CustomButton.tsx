import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({children,custompress}) => {
  return (
    <TouchableOpacity onPress={custompress}>

    <View >
      <Text style={sty.txt}>{children}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default CustomButton
const sty=StyleSheet.create({
txt:{
  textAlign:'center',
  fontSize:20,
  color:'black'
}
});