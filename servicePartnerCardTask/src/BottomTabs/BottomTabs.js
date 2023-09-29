import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome5';

import { TopTabNavigator } from "../TopTabs/TopTabs";
import ServiceAdvisors from "../Screens/ServiceAdvisors/ServiceAdvisors";
import Account from "../Screens/Account/Account";
const BottomTab = createBottomTabNavigator();

export default function BottomTabs() {
    return(
    <BottomTab.Navigator screenOptions={{headerShown:false,tabBarActiveBackgroundColor: '#807a79'}}>
        <BottomTab.Screen 
          name='Bookings' 
          component={TopTabNavigator}  
          options={{tabBarIcon: () => {
              return(
                <Icon name='home' size={23} />
              );
            }}}
          />
        <BottomTab.Screen 
          name='Service Advisors' 
          component={ServiceAdvisors}
          options={{tabBarIcon: () => {
            return(
              <Icon name='user-cog' size={23}  />
            );
          }}} 
        />
        <BottomTab.Screen 
          name='Account' 
          component={Account}
          options={{tabBarIcon: () => {
            return (
              <Icon name='user-alt' size={23} />
            );
          }
          }}
        />
    </BottomTab.Navigator>
    );
}