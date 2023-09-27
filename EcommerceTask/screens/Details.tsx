import { View, Text, ScrollView, Image,Dimensions,StyleSheet, TouchableOpacity,Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/cartSlice';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { setItem } from '../Aysnc';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Details = ({route,navigation}) => {

  const dispatch = useDispatch();
  const {width} = Dimensions.get('window');
  const height = width* 0.6
  const detail = route.params;
 

 
const addtoCart =async (detail) => {
    // console.log(detail)
  //  setItem(detail);

  await AsyncStorage.setItem('item',JSON.stringify(detail))
 
    dispatch(addCart(detail.item));
    Alert.alert('Success',
    "Successfully added to cart");
    navigation.navigate('Products')
}


  
  return (
    <View >
      <ScrollView 
      style={styles.scrollcon}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      >
        {detail.item.images.map((item) => 
            <Image style={{width,height,resizeMode:'stretch',marginTop: 25}} key={item} source={{uri: item}}/>
        )}
      </ScrollView>
      <View style={styles.text}>
      <Text style={{fontSize: 30,fontWeight: '700',color: 'black',textAlign: 'center',marginBottom: 10}}>{detail.item.title}</Text>
      <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize: 18,color: '#161616'}}>Description :</Text>
      <Text style={{fontSize: 18,color: '#0e784d'}}> {detail.item.description}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize: 18,color: '#161616'}}>Price :</Text>
      <Text style={{fontSize: 18,color: '#0e784d'}}> $ {detail.item.price}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize: 18,color: '#161616'}}>discountPercentage :</Text>
      <Text style={{fontSize: 18,color: '#0e784d'}}> {detail.item.discountPercentage} %</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize: 18,color: '#161616'}}>Rating :</Text>
      <Text style={{fontSize: 18,color: '#0e784d'}}>{detail.item.rating}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize: 18,color: '#161616'}}>Stock :</Text>
      <Text style={{fontSize: 18,color: '#0e784d'}}>{detail.item.stock}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize: 18,color: '#161616'}}>Brand :</Text>
      <Text style={{fontSize: 18,color: '#0e784d'}}> {detail.item.brand}</Text>
      </View>
      </View>
      <View>
        <TouchableOpacity style={styles.addcart} onPress={() => {addtoCart(detail)}}>
          <Text style={{fontSize: 22, color:"black"}}>Add Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Details

const styles= StyleSheet.create({
  scrollcon: {
   marginTop: 25,
    backgroundColor: 'black',
    width: '100%',
    height: "40%",
    borderRadius: 8
  },
  text: {
    margin: 5,
    padding: 6,
  },
  addcart: {
    alignItems: 'center',
    borderWidth: 1,
    margin: 50,
    borderRadius: 8,
    backgroundColor: '#49acbe'
  }
})