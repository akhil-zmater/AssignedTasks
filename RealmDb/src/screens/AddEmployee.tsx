import { StyleSheet,Alert } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import CustomText from '../components/CustomText'
import CustomButton from '../components/CustomButton'

import Realm from 'realm'

export const EmployeeSchema = {
  name: 'Employee',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    salary: 'string',
    mobileNumber: 'string',
    email: 'string'
  }
}

const AddEmployee = ({navigation}) => {

  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber,setMobileNumber] = useState('');

 

 

  let realm =  new Realm({
    path: 'Employee',
    schema: [EmployeeSchema]});

  const employeeHandle = () => {
      realm.write(() => {
        realm.create('Employee',{
          id: Math.floor(Math.random()*1000),
          name,
          salary,
          mobileNumber,
          email
        })
      })
      Alert.alert('Success',
      "Added Successfully",
      [
        {
          text: 'ok',
          style: 'destructive',
          onPress: () => navigation.navigate('Home')

        },
      ]
      )
        
  }

  return (
    <>
     
      <CustomText style={styles.text}>Employee Name</CustomText>
      <CustomInput 
      style={styles.input} 
      placeholder='Enter Employee Name' 
      placeholderTextColor='#d3ab1a'
      value={name}
      onChangeText={text => setName(text)}
      />
      <CustomText style={styles.text}>Employee Salary</CustomText>
      <CustomInput 
      style={styles.input} 
      placeholder='Enter Employee salary' 
      placeholderTextColor='#d3ab1a' 
      value={salary}
      onChangeText={setSalary}
      keyboardType='number-pad'
      />
       <CustomText style={styles.text}>Employee Mobile</CustomText>
      <CustomInput 
      style={styles.input} 
      placeholder='Enter Mobile Number' 
      placeholderTextColor='#d3ab1a' 
      value={mobileNumber}
      onChangeText={setMobileNumber}
      maxLength={10}
      keyboardType='number-pad'
      />
      <CustomText style={styles.text}>Email Id</CustomText>
      <CustomInput 
      style={styles.input} 
      placeholder='Enter Email' 
      placeholderTextColor='#d3ab1a'
      value={email}
      onChangeText={text => setEmail(text)}
      />

      <CustomButton onPress={() => employeeHandle()} >Add</CustomButton>
    </>
  )
}

export default AddEmployee

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black'
  },
  input: {
    borderWidth: 1,
    height: 36,
    borderRadius: 16,
    borderColor: '#61b4cd',
    margin: 5,
    backgroundColor: 'white',
    paddingHorizontal: 25
  }
})