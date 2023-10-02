import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import New from '../../screens/Bookings/New';
import Pickups from '../../screens/Bookings/Pickups';
import Drops from '../../screens/Bookings/Drops';


const TopTab = createMaterialTopTabNavigator();

const Toptab = () => {
  return (
    <TopTab.Navigator>
     
    <TopTab.Screen name='New' component={New}/>
    <TopTab.Screen name='PickUps' component={Pickups}/>
    <TopTab.Screen name='Drops' component={Drops}/>
   
   </TopTab.Navigator>
  )
}

export default Toptab