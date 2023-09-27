import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import AddEmployee from './AddEmployee';
import Home from './Home';
import AllEmployees from './AllEmployees';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Add Employee' component={AddEmployee}/>
            <Stack.Screen name='Employee List' component={AllEmployees}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation