import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../Components/CustomButton'

const FirstScreen = ({navigation}) => {
  return (
    <>
    <CustomButton custompress={()=>{navigation.navigate('addata')}}>Add Data</CustomButton>
    <CustomButton custompress={()=>{navigation.navigate('view')}}>View ALL Data</CustomButton>
    </>
  )
}

export default FirstScreen