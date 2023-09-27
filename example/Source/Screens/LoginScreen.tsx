import {TextInput} from 'react-native-paper';
import React ,{useState}from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
import CustomButton from '../Components/CustomButton';
import { Login } from '../Auth/Auth';
const LoginScreen = ({navigation}) => {
  const [logindata,setLogindata] = useState({
    email:"",
    password:""
  })
  const inputhandler =(identifier,enteredtext)=>{
    setLogindata((curinputvalues)=>{

      return{
        ...curinputvalues,[identifier]:enteredtext
      };
    });
  }
  
  const loginhandler = async()=>{
  Login(logindata.email,logindata.password).then(()=>{console.log('ur logged in');}).catch(error => {
    if(error.code==='auth/invalid-login'){
     Alert.alert('Enter Valid Credentials','Incorrect Username or Password');
     setLogindata((curval)=>{
      return{
...curval,email:'',password:''
     }})
    }
   });
  
  }
  return (
    <View style={sty.innercon}>
      <Text style={sty.title}>Login</Text>
      <TextInput label="Email" style={sty.txtin} 
      onChangeText={inputhandler.bind(this,'email')} 
      value={logindata.email} />
      <TextInput label="Password" 
      secureTextEntry style={sty.txtin} 
      onChangeText={inputhandler.bind(this,'password')} 
      value={logindata.password}/>
      <CustomButton custompress={loginhandler}>Login</CustomButton>
      <View style={{flexDirection: 'row', marginLeft: 10}}>
        <Text style={{fontSize: 15, color: 'black'}}>Are u New user?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('register');
          }}>
          <Text
            style={{
              marginLeft: 15,
              color: 'red',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
const sty = StyleSheet.create({
  innercon: {
    borderWidth: 2,
    borderColor: 'red',
    marginHorizontal: 10,
    marginVertical: '40%',
    padding: 8,
  },
  title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  txtin: {
    margin: 5,
    fontSize: 20,
  },
});
