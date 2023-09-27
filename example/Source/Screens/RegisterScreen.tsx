import { View, Text,StyleSheet,KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'

import {TextInput} from 'react-native-paper';
import CustomButton from '../Components/CustomButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import { Createuser } from '../Auth/Auth';

const RegisterScreen = ({navigation}) => {
  
  const[error,setError] =useState('');
  const [haserrors, setHasErrors] = useState({
    username: false,
    email: false,
    password: false,
    confirmpassword: false,
  });
  const [inputdata,setInputdata] = useState({
    username:'',email:'',password:'',confirmpassword:''
  })
  const inputhandler=(identifier,enteredtext)=>{
 setInputdata((curinputvalues)=>{
  return{
    ...curinputvalues,[identifier]:enteredtext
  };
 });
  }
 

    const authenticate =  ()=>{
      if(inputdata.password !== inputdata.confirmpassword){
       
          setError('Password and Confirm Password Didnt match');
          setHasErrors((curvalues)=>{
            return {...curvalues,password:true,confirmpassword:true}
          })
        }
  else if(inputdata.confirmpassword==='' ||  inputdata.email==='' || inputdata.password==='' || inputdata.username===''){
      setError('Enter Your details');
      setHasErrors(curvalues => {
        return {...curvalues, password: true, confirmpassword: true,username:true,email:true,};
      });
  }
  else{
Createuser(inputdata.email, inputdata.password);
  } 
  
   }
  

////error handling or validations///

const confirmpass=inputdata.confirmpassword;

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <View>
        <View style={sty.innercon}>
          <Text style={sty.title}>Register Page</Text>
          <TextInput
            label="User Name"
            placeholder="Enter Your Name"
            mode="outlined"
            style={sty.txtin}
            onChangeText={inputhandler.bind(this, 'username')}
            value={inputdata.username}
            error={haserrors.username}
          />
          <TextInput
            label="Email"
            placeholder="Enter Your Email"
            mode="outlined"
            style={sty.txtin}
            onChangeText={inputhandler.bind(this, 'email')}
            value={inputdata.email}
            error={haserrors.email}
          />
          <TextInput
            label="Password"
            placeholder="Enter Your Password"
            mode="outlined"
            style={sty.txtin}
            secureTextEntry
            onChangeText={inputhandler.bind(this, 'password')}
            value={inputdata.password}
            error={haserrors.password}
          />
          <TextInput
            label="Confirm Password"
            placeholder="Confirm Password"
            mode="outlined"
            style={sty.txtin}
            secureTextEntry
            onChangeText={inputhandler.bind(this, 'confirmpassword')}
            value={inputdata.confirmpassword}
            error={haserrors.confirmpassword}
          />
          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              fontSize: 15,
              textAlign: 'center',
              marginTop: 10,
            }}>
            {error}
          </Text>
          <CustomButton custompress={authenticate}>Register</CustomButton>
          <View style={{flexDirection: 'row', marginLeft: 10}}>
            <Text style={{fontSize: 15, color: 'black'}}>
              Are u already registered?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('login');
              }}>
              <Text
                style={{
                  marginLeft: 15,
                  color: 'red',
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default RegisterScreen
const sty=StyleSheet.create({
    innercon:{
        borderWidth:2,
        borderColor:'red',
        marginHorizontal:10,
        marginVertical:'20%',
        padding:8,
    },
    title:{
        textAlign:'center',
        color:'black',
        fontSize:30,
        fontWeight:'bold',
    },
    txtin:{
        margin:5,
    }
});