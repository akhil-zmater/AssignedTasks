import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ServiceAdvisor from '../../screens/ServiceAdvisors';
import Account from '../../screens/Account';
import Toptab from '../TopTab';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from '../../components/CustomIcons/Entypo';
import { AccountIcon, ServiceAdvisorIcon } from '../../components/constants/Icons';


const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Bookings" component={Toptab} options={{
        tabBarIcon: () => {
          return(
            <Entypo />
          );
        }
      }}/>
       <Tab.Screen name='Service Advisors' component={ServiceAdvisor} options={{
        tabBarIcon: () => {
          return(
            <Ionicons name={ServiceAdvisorIcon} color="#000" size={26}/>

          );
        }
       }}/>
       <Tab.Screen name='Account' component={Account} options={{
        tabBarIcon: () => {
          return(
            <Ionicons name={AccountIcon} color='#000' size={26}/>
          );
        }
       }}/>
    </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomTab