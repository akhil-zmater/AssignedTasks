import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Button, ScrollView, Pressable, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export default function EmployeeStore({ realm, navigation }) {
  const [editEmployee, setEditEmployee] = useState(null);

  function addHandler() {
    navigation.navigate('DetailsTaking');
  }

  function deleteHandler(employee) {
    const employeeToDelete = realm.objects('Person').filtered('id == $0', employee.id);

    if (employeeToDelete.length > 0) {
      realm.write(() => {
        realm.delete(employeeToDelete);
        Alert.alert('Deleted', 'Employee deleted from the database');
      });
    }
  }

  function editIconHandler(employee) {
    setEditEmployee(employee);
    navigation.navigate('DetailsTaking', { employee });
  }

  const employees = realm.objects('Person');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headingText}>Employee Details</Text>
      {employees.map((employee) => (
        <View key={employee.id} style={{ borderWidth: 1, padding: 6, borderRadius: 6, margin: 8 }}>
          <View>
            <Text style={styles.outerText}>
              <Text style={styles.innerText}>ID : </Text>
              {employee.id}
            </Text>
            <Text style={styles.outerText}>
              <Text style={styles.innerText}>Name :</Text> {employee.name}
            </Text>
            <Text style={styles.outerText}>
              <Text style={styles.innerText}>Salary :</Text> {employee.salary}
            </Text>
            <Text style={styles.outerText}>
              <Text style={styles.innerText}>Description :</Text> {employee.description}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Pressable onPress={() => deleteHandler(employee)}>
              <Icon name="trash" size={30} color="red" />
            </Pressable>
            <Pressable onPress={() => editIconHandler(employee)}>
              <Icon name="pencil" size={30} color="black" />
            </Pressable>
          </View>
        </View>
      ))}
      <View style={{ alignItems: 'center' }}>
        <Button title="Add Employee" onPress={addHandler} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  outerText: {
    color: 'black',
    fontWeight: '400',
  },
  headingText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
    margin: 6,
  },
});
