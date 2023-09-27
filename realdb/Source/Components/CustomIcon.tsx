import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const CustomIcon = ({iconname,iconcolor,iconpress}) => {
  return (
    <TouchableOpacity onPress={iconpress}>
        <Icon name={iconname} size={24} color={iconcolor}/>
    </TouchableOpacity>
  )
}

export default CustomIcon