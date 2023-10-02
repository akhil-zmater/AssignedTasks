import { View, Text } from 'react-native'
import React from 'react'

const CustomText = ({style,children}) => {
  return (
    <View>
      <Text style={style}>{children}</Text>
    </View>
  )
}

export default CustomText