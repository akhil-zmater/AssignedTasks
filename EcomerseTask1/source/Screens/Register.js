import { useState } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Button,Alert} from 'react-native';
import { CreateUser } from '../Auth/auth';
// import { CreateUser } from '../Auth/auth';

export default function Register({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  function loginHandler() {
    if ( name === '' || email === '' || password === '' || confirmPassword === '' ) {
      Alert.alert('Warning', 'Please fill in all the credentials.');
    } else if (password !== confirmPassword) {
      Alert.alert('Warning', 'Password and Confirm Password do not match.');
    } else {
      CreateUser(email,password)
      // navigation.navigate('Login Screen');
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Let's Sign Up</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.subText}>Name:</Text>
        <TextInput
          placeholder="Enter Name"
          placeholderTextColor="#324d87"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.textInput}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.subText}>Email:</Text>
        <TextInput
          placeholder="Enter Email"
          placeholderTextColor="#324d87"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.textInput}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.subText}>Password:</Text>
        <TextInput
          placeholder="Enter Password"
          placeholderTextColor="#324d87"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.textInput}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.subText}>Confirm Password:</Text>
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#324d87"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          style={styles.textInput}
          secureTextEntry={true} 
        />
      </View>
      <Button title="Register" onPress={loginHandler} />
      <View>
        <Text style={styles.lastText}>
          Already have an account!!
          <TouchableOpacity onPress={() => navigation.navigate('Login Screen')}>
            <Text style={styles.lastInnerText}> Login.</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#cbf5f4'
  },
  mainText: {
    fontSize: 25,
    color: '#c277d9',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    marginHorizontal: 17,
    color: '#479bb5',
  },
  textInput: {
    borderWidth: 1,
    width: '90%',
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 17,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'flex-start',
    margin: 12,
  },
  lastText: {
    fontSize: 18,
    marginTop: 12,
    color: '#364d69',
  },
  lastInnerText: {
    color: '#535ae6',
    fontSize: 20,
  },
});

