import { View, Text,ScrollView,Image,TouchableOpacity,StyleSheet,Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { removeCart } from '../redux/cartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getItem } from '../Aysnc';


const Cart = () => {

  const product = useSelector(state => state.cart)

  const [data,setData] = useState([]);

  const dispatch = useDispatch();
  // console.log(product);

  

  const getItem = async() => {
    
    const savedItem =  await AsyncStorage.getItem('item');
    const currentItem = JSON.parse(savedItem)
     if (currentItem !== null){
       // console.log(currentItem);
       setData(currentItem);
       
     }
     
   } 
 
  useEffect(() => {  
     getItem();
  },[])
  console.log(data);

 

  const removeToCart = async(id) => {
    await AsyncStorage.removeItem('item')
    dispatch(removeCart(id))
  }

  return (
    <ScrollView 
    style={styles.scrollcon}
    >
      {product.map((item) => {
        return (
          <View style={{alignItems: 'center'}}>
            <Image key={item.id} source={{uri: item.thumbnail}} style={{width:"90%",height: 280,margin: 15,borderRadius: 15,resizeMode: 'contain'}}/>
            <Text style={{fontSize: 24,color: 'white',fontWeight: 'bold'}} >{item.title}</Text>
            <TouchableOpacity style={{backgroundColor: 'red',width: "30%",borderWidth: 1,borderRadius: 4,borderColor: 'red',alignItems: 'center',margin: 5}}>
              <Text style={{fontSize: 18,color: 'white'}} onPress={() => removeToCart(item.id)} >Remove cart</Text>
            </TouchableOpacity>
          </View>
        );
      })}
      
  </ScrollView>
  )
}

export default Cart

const styles= StyleSheet.create({
  text: {
    margin: 15,
    padding: 8
  },
  addcart: {
    alignItems: 'center',
    borderWidth: 1,
    margin: 50,
    borderRadius: 8,
    backgroundColor: '#49acbe'
  },
  scrollcon: {
    flex: 1,
    backgroundColor: 'black'
  }
})