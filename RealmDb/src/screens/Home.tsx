import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'

const Home = ({navigation}) => {
  return (
    <View>
      <CustomButton onPress={() => navigation.navigate('Add Employee')}>Add Employee</CustomButton>
      <CustomButton onPress={() => navigation.navigate('Employee List')}>All Employees</CustomButton>
    </View>
  )
}

export default Home