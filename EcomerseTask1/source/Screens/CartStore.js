import { View,Text, Image, ScrollView, Button,Pressable, StyleSheet } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
// import { deletecart } from '../Redux/Reducer/CartReducer';
import { removeFromCart } from '../Redux/Reducer/CartReducer';

export default function CartStore() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) =>
    {
      // console.log("ewfdgvzx,")
      // console.log(state)
  return  state.products
});
 
    // const removefromCart = (item) => {
    //     // dispatch( deletecart(item)) 
    //     console.log(item )
    // }
      
    // const handleRemoveFromCart = (cartItem) => {
    //   dispatch (removeFromCart(cartItem));
    // };
    // function detailsHandler() {
    //   navigation.navigate('Product Details',{item})
    // }
    
  return (
    <ScrollView style={{backgroundColor: 'gray'}}>
      {cartItems.map((item) => (
        <View style={{alignItems:'center',margin: 6, padding:4,borderRadius:6,backgroundColor: 'black'}}>
          {/* <Pressable onPress={detailsHandler}> */}
              <Image  source={{uri: item.thumbnail}} style={{width:200, height:140,margin: 12,borderRadius:6}} />
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.priceBrandText}>${item.price}</Text>
                <Text style={styles.priceBrandText}>{item.brand}</Text>
              </View>
              <Text style={styles.titleText}>{item.title}</Text>
          {/* </Pressable> */}
          <Button title='remove' onPress={() => dispatch(removeFromCart(item.id))} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  priceBrandText: {
    fontSize: 20, 
    fontWeight:'bold', 
    color: 'black',
    marginHorizontal:20
  },
  titleText: {
    fontSize: 20, 
    fontWeight:'bold', 
    marginBottom:6, 
    color: 'blue'
  }
});
