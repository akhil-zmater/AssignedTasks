import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Schedule from './screens/Schedule';
import Chat from './screens/Chat';
import Profile from './screens/Profile';
import Ionicons from "react-native-vector-icons/Ionicons"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Today from './screens/scheduleScreens/Today';
import Week from './screens/scheduleScreens/Week';
import Month from './screens/scheduleScreens/Month';

const TopTab = createMaterialTopTabNavigator();
const ScheduleSCreen =() => {
  return(
    <TopTab.Navigator>
      {/* <TopTab.Screen name='Schedule' component={Schedule}/> */}
      <TopTab.Screen name='Today' component={Today}/>
      <TopTab.Screen name='Week' component={Week}/>
      <TopTab.Screen name='Month' component={Month} />
    </TopTab.Navigator>
  );
}

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
    <Tab.Navigator initialRouteName='ScheduleSCreen'>
    <Tab.Screen name="ScheduleSCreen" component={ScheduleSCreen} options={{
      headerShown: false,
    tabBarIcon: ({tintColor}) => {
      return (
        <Ionicons name='calendar' size={24} color={tintColor}/>
      );
    }
    }}/>
    <Tab.Screen name="Chat" component={Chat} options={{
      tabBarIcon: ({tintColor}) => {
        return(
          <Ionicons name='chatbubble-ellipses-outline' size={24} color={tintColor}/>
        );
      }
    }}/>
    <Tab.Screen name="Profile" component={Profile} 
    options={{
      tabBarIcon: ({tintColor}) => {
        return(
          <Ionicons name='person-circle' size={24} color={tintColor}/>
        );
      }
    }} />
  </Tab.Navigator>
  </NavigationContainer>
  )
}

export default App