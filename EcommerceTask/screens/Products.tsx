import { View, Text ,FlatList,Image,StyleSheet,TouchableOpacity, TextInput,Dimensions} from 'react-native'
import React ,{useEffect,useState}from 'react'
import axios from 'axios'


const {width } = Dimensions.get('window');
const Products = ({navigation}) => {

  const [products,setProducts] = useState([]);
  // const [searchdata,setSearchData] = useState([]);
  const [search,setSearch] = useState("");
  
  
  const getData = async() => {
    const url = 'https://dummyjson.com/products';
    const response = await axios.get(url)
    const result = response.data;
    if (result){
      setProducts(result.products);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  // const url = `https://dummyjson.com/products/search?q=${search}`
  // console.log(url)

  


  // const searchHandler = async() => {
  //   const url = `https://dummyjson.com/products/search?q=${search}`
  //   const response = await axios.get(url);
  //   const result = response.data;
  //   if (result){
  //     setProducts(result.products)
  //     setSearchData(result.products)
  //   }
  //   if (search.length === 0){
  //     setProducts(result.products)
  //   }
  // }

const data=products.filter((item)=>
  item.title.toLowerCase().includes(search.toLowerCase()))

  return (
   <View style={{flex: 1}}>
    <View style={styles.container}>
      <TextInput value={search}
      onChangeText={text => setSearch(text)}
      autoCapitalize='none'
      autoCorrect={false}
      placeholder='Search here...'
      style={styles.input}/>
      {/* <TouchableOpacity onPress={searchHandler}>
        <Text>Search</Text>
      </TouchableOpacity> */}
    </View>
    <FlatList 
    keyExtractor={(item) => item.id.toString()}
    data={data}
    
    renderItem={({item}) => {
      return(
        <TouchableOpacity style={styles.container1} onPress={() => {navigation.navigate('Details',{item})}}>
          <Image style={styles.images} source={{uri: item.thumbnail}}/>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.title}>$ {item.price}</Text>
          
        </TouchableOpacity>
      );
    }}
    numColumns={1}
    />
  </View>
  )
}

export default Products

const styles= StyleSheet.create({
  images: {
    width: "95%",
    height: 300,
    resizeMode:'contain'
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
    margin: 10,
    backgroundColor: 'black'
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  },
  container:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    margin:16,

},
input:{
    flex:1,
    marginRight:16,
    padding:8,
    borderWidth:1,
    borderColor:'black',
    borderRadius:8,
    }
})