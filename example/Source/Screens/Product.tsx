import axios from 'axios';
import {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Searchbar} from 'react-native-paper';



export function Product({navigation}) {
  useEffect(() => {
    const getdata = async () => {
      const url = 'https://dummyjson.com/products';
      const result = await axios.get(url);
      setData(result.data.products);
    };
    getdata();
  }, []);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  // const filterdata=data.filter((item)=>{
  //  item.title.toLowerCase().includes(search.toLowerCase());
  // })

  return (
    <View>
      <Searchbar
        placeholder="Search for Product"
        value={search}
        onChangeText={input => {
          setSearch(input);
        }}
        style={{
          borderRadius: 20,
          backgroundColor: 'white',
          marginVertical: 10,
          marginHorizontal: 5,
        }}
      />

      <FlatList
        data={data.filter(item => {
          return item.title.toLowerCase().includes(search.toLowerCase());
        })}
        renderItem={itemData => {
          return (
            <TouchableOpacity
              key={itemData.item.id}
              onPress={() => {
                navigation.navigate('details', {data: itemData.item});
              }}>
              
                <Image
                  source={{uri: itemData.item.thumbnail}}
                  style={{height: 200, width: 400, margin: 10}}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <Text style={style.txt}>{itemData.item.title}</Text>
                  <Text style={[style.txt, {color: 'red', fontWeight: 'bold'}]}>
                    {itemData.item.price} $
                  </Text>
                </View>
            
            </TouchableOpacity>
          );
        }}
   
      />
    </View>
  );
}
const style = StyleSheet.create({
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
});
