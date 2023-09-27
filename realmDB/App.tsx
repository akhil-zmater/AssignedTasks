import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Realm from 'realm';

import DetailsTaking from './Source/Screens/DetailsTaking';
import EmployeeStore from './Source/Screens/EmployeeStore';

const Stack = createStackNavigator();

export default function App() {
  const PersonSchema = {
    name: 'Person',
    properties: {
      id: 'int',
      name: 'string',
      salary: 'int',
      description: 'string',
    },
    primaryKey: 'id',
  };

  const realm = new Realm({ schema: [PersonSchema] });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DetailsTaking">
        <Stack.Screen name="DetailsTaking" >
          {(props) => <DetailsTaking {...props} realm={realm} />}
        </Stack.Screen>
        <Stack.Screen name="EmployeeStore" >
          {(props) => <EmployeeStore {...props} realm={realm} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
