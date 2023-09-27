import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function ProductScreen({navigation}) {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const API = `https://dummyjson.com/products`;

  useEffect(() => {
    async function func() {
      const res = await axios.get(API);
      const result = res.data;
      setData(result.products);
    }
    func();
  }, []);

  function detailsHandler(item) {
    navigation.navigate('Product Details',{item})
  }

  const renderItem = ({ item }) => {
    return (
      <Pressable style={styles.renderPress} onPress={() => detailsHandler(item)}>
        <Image
          style={styles.image}
          source={{ uri: item.thumbnail }}
        />
        <View style={{flexDirection: 'row',justifyContent: 'space-between',marginHorizontal:50,margin:12}}>
          <Text style={styles.text}>{item.title}</Text>
          <Text style={styles.text}>${item.price}</Text>
        </View>
      </Pressable>
    );
  }

  
  return (
    <GestureHandlerRootView style={{backgroundColor: 'purple'}}>
      <TextInput
        placeholder='Search Product...'
        placeholderTextColor= 'black'
        style={styles.textInput}
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <View>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={data.filter((item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
          )}
          renderItem={renderItem}
          numColumns={1}
        />
      </View>
    </GestureHandlerRootView>
  );
}
{/* <View>
  <FlatList 
    keyExtractor={(item) => item.id.toString()}
    data={data.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))}
    renderItem={renderItem}
    numColumns={2}
  />
  </View>
 */}

const styles = StyleSheet.create({
  image: {
    width: 390,
    height: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    borderRadius: 8 
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    textAlign: 'center',
  },
  renderPress: {
    borderWidth: 2, 
    borderColor: 'purple', 
    borderRadius: 8, 
    margin: 5, 
    backgroundColor: 'orange' 
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'black',
    margin: 12,
    borderRadius: 8,
    padding: 10,
    height: 50,
    fontSize: 17,
    backgroundColor: 'white'
  }
});
