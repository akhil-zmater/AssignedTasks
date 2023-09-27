import { View, Text, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({placeholder,value,onChangeText,keyboardType,placeholderTextColor,style,maxLength}) => {
  return (
    <View>
      
      <TextInput 
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      placeholderTextColor={placeholderTextColor}
      style={style}
      maxLength={maxLength}
      />
    </View>
  )
}

export default CustomInput