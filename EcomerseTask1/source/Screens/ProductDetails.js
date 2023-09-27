import React from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import CartButton from '../Components/CartButton';
import { useDispatch } from 'react-redux';
import { incrementcart } from '../Redux/Reducer/CartReducer';

export default function ProductDetails({ route, navigation }) {
  const dispatch = useDispatch();
  const { item } = route.params;
 
  // const [count,setCount] = useState(0)

  function addtocart() {
    // <Text>{setCount(count+1)}</Text>
    console.log(item);
    dispatch(incrementcart(item));
    // setCount(count+1)
    Alert.alert('Success', 'Product added to the cart successfully...');
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.images[0] }} />
      <View style={{ alignItems: 'flex-start', margin: 12 }}>
        <Text style={styles.text1}>Product ID: <Text style={styles.text}>{item.id}</Text> </Text>
        <Text style={styles.text1}>Description: <Text style={styles.text}>{item.title}</Text> </Text>
        <Text style={styles.text1}>Brand: <Text style={styles.text}>{item.description}</Text></Text>
        <Text style={styles.text1}>Cost in Rs: <Text style={styles.text}>{item.price}</Text> </Text>
        <Text style={styles.text1}>discountPercentage: <Text style={styles.text}>{item.discountPercentage}</Text> </Text>
        <Text style={styles.text1}>Rating: <Text style={styles.text}>{item.rating}</Text> </Text>
        <Text style={styles.text1}>Stock: <Text style={styles.text}>{item.stock}</Text> </Text>
        <Text style={styles.text1}>Brand: <Text style={styles.text}>{item.brand}</Text> </Text>
        <Text style={styles.text1}>Category: <Text style={styles.text}>{item.category}</Text> </Text>
        <CartButton onPress={addtocart}>Add to cart</CartButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    height: 250,
    width: 300,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  text1: {
    fontSize: 18,
    color: 'tomato',
  },
  text: {
    fontSize: 15,
    color: '#1032a1',
  },
});
