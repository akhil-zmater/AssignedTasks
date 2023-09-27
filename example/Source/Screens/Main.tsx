import 'react-native-reanimated';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, TouchableOpacity, View} from 'react-native';

import {Product} from './Product';
import {Details} from './Details';
import Icon from 'react-native-vector-icons/AntDesign';
import Cart from './Cart';
import { useSelector } from 'react-redux';
import RegisterScreen from './RegisterScreen';
import LoginScreen from './LoginScreen';
import { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { Signout } from '../Auth/Auth';
import { GetItem } from '../Store/Async';
const Main = () => {
 
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

 
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

    const stack = createStackNavigator();
    const countdata=useSelector(state =>state.cart);
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="login" >
      
        { user ?
        <>
          <stack.Screen
          name="product"
          component={Product}
          options={({navigation}) => ({
            title: 'Products',
            headerRight: () => (
              <View style={{flexDirection:'row'}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('cart');
                 
                }} style={{flexDirection:'row',marginHorizontal:10}}>
              

                <Icon name="shoppingcart" size={40} color="black" />
               <Text>{countdata.length}</Text>
                  
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{Signout()}}>
                <Icon name='logout' size={40} color='black'/>

              </TouchableOpacity>
              </View>
            ),
          })}
        />
        <stack.Screen
          name="details"
          component={Details}
          options={{title: 'Product Details'}}
        />
        <stack.Screen name="cart" component={Cart} options={{title: 'Cart'}} />
        </>
       : 
       <>
       <stack.Screen name='register' component={RegisterScreen} options={{title:'Register Page'}}/>
        <stack.Screen name='login' component={LoginScreen} options={{title:'Login Page'}}/> 
       </>
}
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default Main