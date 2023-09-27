import React from 'react';
import { View, StyleSheet } from 'react-native';
import EmployersAddButton from '../components/EmployersAddButton';
import ViewEmployers from '../components/ViewEmployers';

export default function FirstScreen({ navigation, route }) {
  const { employeeDetails } = route.params || {};

  function addHandler() {
    navigation.navigate('Details Taking Screen');
  }

  function viewHandler() {
    navigation.navigate('Employee Store', { employeeDetails });
  }

  return (
    <View style={styles.container}>
      <EmployersAddButton onPress={addHandler}>Add Employee</EmployersAddButton>
      <ViewEmployers onPress={viewHandler}>View Employees</ViewEmployers>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
