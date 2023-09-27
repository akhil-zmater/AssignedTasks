
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../Components/CustomButton';
import { DELETE } from '../Store/Slice';
import { GetItem } from '../Store/Async';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Cart =  () => {
  
  const reduxdata = useSelector(state => state.cart);
  const dispatch=useDispatch();
  // const getItem= async()=>{
  //   const data=await AsyncStorage.getItem('akhil');
  //   const result=JSON.parse(data);
   
  // }
  //  useEffect(()=>{

  //    getItem();
  //  },[])
  GetItem();
  return (
   <FlatList data={reduxdata} renderItem={(item)=>{
    return (
      <View>
<TouchableOpacity >

    <Image source={{uri:item.item.thumbnail}} style={{height:200,width:300,marginHorizontal:30,marginVertical:20,}}/>
    <View style={{flexDirection: 'row',justifyContent: 'space-evenly'}}>
                  <Text style={style.txt}>{item.item.title}</Text>
                  <Text style={[style.txt, {color: 'red', fontWeight: 'bold'}]}>
                    {item.item.price} $
                  </Text>
        </View>
</TouchableOpacity>


<CustomButton custompress={()=>{dispatch(DELETE(item.item.id))}}>RemoveItem</CustomButton>

      </View>
    )
   }}/>
  );
};

export default Cart;
const style=StyleSheet.create({
  txt:{
      fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  }
});