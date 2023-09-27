
import React, {useState,useEffect} from 'react'
import {Text, View,TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from '../screens/Products';
import Details from '../screens/Details';
import Icons from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Cart from '../screens/Cart';
import { useSelector } from 'react-redux';
import Register from './Register';
import Login from './Login';
import auth from '@react-native-firebase/auth';
import { signout } from '../utils/utils';



const Stack = createNativeStackNavigator();



const Route = () => {
    const count = useSelector(state => state.cart);


    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
  
   
    const onAuthStateChanged = (user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    }

    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; 
    }, []);

    const signouthandle = () => {
      // console.log('signout')
      signout();
    }



  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
      {user ?
      <>
      <Stack.Screen name='Products' component={Products} options={({navigation}) =>({
        headerRight: ({tintColor}) => {
          return(
            <View >
              <TouchableOpacity style={{flexDirection: 'row',position:'absolute',bottom: 1,right: 36,}} onPress={() => {navigation.navigate('Cart')
              
            }}>
                <Icons name='shopping-cart' size={28} color={tintColor}/>
                <Text style={{position:"absolute",left: 12,  top: -10,fontSize: 14,fontWeight: 'bold',color: 'black'}}>{count.length}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={signouthandle}>
              <AntDesign name='logout' size={24} color={tintColor}/>
              </TouchableOpacity>
            </View>
          );
        }
      })}/>
      <Stack.Screen name='Details' component={Details}/>
      <Stack.Screen name='Cart' component={Cart}/>
      </>
      :
       <>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Register' component={Register}/>
      </> }
      
      
      
     
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Route