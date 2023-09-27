import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';

export default function DetailsTaking({ navigation, route, realm }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [sal, setSal] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (route.params && route.params.employee) {
      const { employee } = route.params;
      setId(employee.id.toString());
      setName(employee.name);
      setSal(employee.salary.toString());
      setDescription(employee.description);
    }
  }, [route.params]);

  function addHandler() {
    if (id === '' || name === '' || sal === '' || description === '') {
      Alert.alert('Error', 'Please fill in all the details!!!');
    } else {
      realm.write(() => {
        if (route.params && route.params.employee) {
          realm.create('Person', {
            id: parseInt(id),
            name: name,
            salary: parseInt(sal),
            description: description,
          }, 'modified');
        } else {
          realm.create('Person', {
            id: parseInt(id),
            name: name,
            salary: parseInt(sal),
            description: description,
          });
        }
      });
      navigation.navigate('EmployeeStore');
    }
  }

  function ViewEmployersHandler() {
    navigation.navigate('EmployeeStore');
  }

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center', fontSize: 23, color: 'black', fontWeight: 'bold' }}>
        {route.params && route.params.employee ? 'Edit Employee' : 'Register Employee'}
      </Text>
      <Text style={styles.textHeading}>Employee ID :</Text>
      <TextInput
        placeholder="Enter ID"
        placeholderTextColor="black"
        value={id}
        maxLength={4}
        onChangeText={(text) => setId(text)}
        style={styles.textInput}
      />
      <Text style={styles.textHeading}>Name of Employee :</Text>
      <TextInput
        placeholder="Enter Name"
        placeholderTextColor="black"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.textInput}
      />
      <Text style={styles.textHeading}>Employee Salary :</Text>
      <TextInput
        placeholder="Enter Salary"
        placeholderTextColor="black"
        value={sal}
        onChangeText={(text) => setSal(text)}
        style={styles.textInput}
      />
      <Text style={styles.textHeading}>Description of Employee :</Text>
      <TextInput
        placeholder="Enter Description"
        placeholderTextColor="black"
        value={description}
        onChangeText={(text) => setDescription(text)}
        style={styles.textInput}
      />
      <View style={styles.buttonContainer}>
        <View>
          <Button title={route.params && route.params.employee ? 'Save Employee' : 'Add Employee'} onPress={addHandler} />
        </View>
        <View style={{ margin: 10 }}>
          <Button title="View Employees" onPress={ViewEmployersHandler} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 4,
    padding: 12,
  },
  textHeading: {
    fontSize: 17,
    color: 'black',
    margin: 6,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'purple',
    padding: 12,
    borderRadius: 8,
    fontSize: 15,
  },
  buttonContainer: {
    margin: 10,
    alignItems: 'center',
  },
});
