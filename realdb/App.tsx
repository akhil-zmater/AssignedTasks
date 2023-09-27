/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MainScreen from './Source/Screens/MainScreen';
import {RealmProvider} from '@realm/react';

import {useState} from 'react';
import CustomButton from './Source/Components/CustomButton';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ViewData from './Source/Screens/ViewData';
import FirstScreen from './Source/Screens/FirstScreen';
import UpdateScreen from './Source/Screens/UpdateScreen';



function App(){
  
 
   const stack=createStackNavigator();

  return (
    <>
   
    <NavigationContainer>
<stack.Navigator>
  <stack.Screen name='main' component={FirstScreen} options={{headerShown:false}}/>
  <stack.Screen name='addata' component={MainScreen} options={{title:'ADD DATA'}}/>
  <stack.Screen name='view' component={ViewData} options={{title:'View Data'}}/>
  <stack.Screen name='update' component={UpdateScreen} options={{title:'Update'}}/>
</stack.Navigator>
    </NavigationContainer>
    
  

    
    </>
    
  );
}

export default App;
