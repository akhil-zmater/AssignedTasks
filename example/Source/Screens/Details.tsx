import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CustomButton from '../Components/CustomButton';
import {useSelector, useDispatch} from 'react-redux';
import {ADD} from '../Store/Slice';
import { SetItem } from '../Store/Async';

const {width} = Dimensions.get('screen');
const height = width * 0.6;
export function Details({route,navigation}) {

  
  const dispatch = useDispatch();
  const data = route.params.data;


  const addtocart =() => {
    //   dispatch(ADD(item));
    //   console.log(item);
  
    SetItem(data);
    dispatch(ADD(data));
  };
  return (
    <View style={{marginTop: 30}}>
      <ScrollView horizontal pagingEnabled >
        {data.images.map(item => (
          <Image source={{uri: item}} style={{width, height}} key={item} />
        ))}
      </ScrollView>
      <Text style={sty.title}>{data.title}</Text>
      <View style={sty.pricecon}>
        <Text style={sty.pricetxt}> Price:{data.price}</Text>
        <Text style={sty.pricetxt}>Rating: {data.rating}</Text>
      </View>
      <Text style={sty.txt}>Category: {data.category}</Text>
      <Text style={sty.txt}> Brand : {data.brand}</Text>
      <Text style={sty.txt}> Description: {data.description}</Text>
      <Text style={sty.txt}> Discount:{data.discountPercentage}</Text>
      <Text style={sty.txt}>Available Stock:{data.stock}</Text>
      <CustomButton custompress={addtocart}>Add to Cart</CustomButton>
    </View>
  );
}
const sty = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  pricecon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  pricetxt: {
    fontSize: 25,
    color: 'red',
  },
  txt: {
    marginTop: 10,
    marginLeft: 50,
    color: 'black',
    fontSize: 20,
  },
});
