import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import Register from './Register';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function userSignin() {
    try {
      if (email === '' || password === '') {
        Alert.alert('Error', 'Please fill in both Email and Password fields.');
      } else {
        const userCredential = await auth().signInWithEmailAndPassword(email, password);
        if (userCredential.user) {
          navigation.navigate('Product Screen');
        } else {
          Alert.alert('Login failed', 'Invalid credentials. Please check your email and password.');
        }
      }
    } catch (error) {
      // console.log(error);
      Alert.alert('Login failed', 'Invalid credentials. Please check your email and password.');
    }
  }
  

  function registerHandler() {
    navigation.navigate('Register Screen');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Let's Sign in</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.subText}>Email:</Text>
        <TextInput
          placeholder='Enter Email'
          placeholderTextColor='#324d87'
          style={styles.textInput}
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.subText}>Password:</Text>
        <TextInput
          placeholder='Enter Password'
          placeholderTextColor='#324d87'
          style={styles.textInput}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
      </View>
      <Button title='Login' onPress={userSignin} />
      <Text style={styles.lastText}>
        Need an account?
        <Pressable onPress={registerHandler}>
          <Text style={styles.lastInnerText}>   Sign Up</Text>
        </Pressable>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
