import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const Profile = () => {

  const {width} = Dimensions.get('window');
  const height= width*0.5;
  const images = [
    require('../assets/cricket.jpg'),
    require('../assets/bgmi.jpg'),
    require('../assets/dance.jpg'),
    require('../assets/longdrive.jpg')
  ];

  const photos = [
    {
      id: 1,
      title: 'franky',
      imageUrl: require('../assets/Persons/franky.jpg'),
    },
    {
      id: 2,
      title: 'john',
      imageUrl: require('../assets/Persons/john.jpg'),
    },
    {
      id: 3,
      title: 'nami',
      imageUrl: require('../assets/Persons/nami.jpg'),
    },
    {
      id: 4,
      title: 'robin',
      imageUrl: require('../assets/Persons/robin.jpg'),
    },
    {
      id: 5,
      title: 'sanji',
      imageUrl: require('../assets/Persons/sanji.jpg'),
    },
    {
      id: 6,
      title: 'usopp',
      imageUrl: require('../assets/Persons/usopp.jpg')
    },

    // require('../assets/Persons/franky.jpg'),
    // require('../assets/Persons/john.jpg'),
    // require('../assets/Persons/nami.jpg'),
    // require('../assets/Persons/robin.jpg'),
    // require('../assets/Persons/sanji.jpg'),
    // require('../assets/Persons/usopp.jpg')
  ];

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Image style={styles.image} source={require("../assets/naruto.jpg")} />
          <View style={{ marginLeft: 25, flexDirection: 'row' }}>
            <Icon name='facebook-official' size={24} color="#3b5998" />
            <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: 'bold', color: 'black' }}>Naruto</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ marginTop: 15, fontSize: 34, fontWeight: 'bold', color: 'black', }}>Naruto Uzumakhi</Text>
          <Text style={{ fontSize: 18, marginTop: 15 }}>Company : Zmater</Text>
          <View style={{ marginTop: 45, flexDirection: 'row' }}>
            <Icon name='instagram' size={24} color="#fa7e1e" />
            <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: 'bold', color: 'black' }}>Naruto</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20,marginTop: 10 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black' }}>Interests</Text>
        <Icon name='plus-circle' size={30} color="blue" />
      </View>
     <ScrollView 
    style={{width,height,marginTop:-15}}
    horizontal
    pagingEnabled
    showsHorizontalScrollIndicator={false}
     >
      {images.map((item,index) => (
        <Image key={index}
         source={item}
          style={{width,height,resizeMode:'cover'}}
          />
      ))}
      
     </ScrollView>
     <View>
     <View style={{ position:'relative',flexDirection: 'row', justifyContent: 'space-between',top:-10,margin:20}}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black' }}>Classmates</Text>
        <Icon name='plus-circle' size={30} color="blue" />
      </View >
      <View style={[{top:-30},styles.search]} >
        <View style={{flexDirection: 'row',alignItems: 'center'}}>
          <EvilIcons name='search' size={24} color="black"/>
          <TextInput placeholder='Search' />
        </View>
        <View style={{marginRight: 10}}>
          <Icon name='microphone' size={24} color="black"/>
        </View>
      </View>
      <View style={{top:-30}}>
        {/* <ScrollView 
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        >
        {photos.map((photo,ind) => {
          return(
            <View>
            <Image style={{width:100,height:100,borderRadius: 50,margin:5,borderWidth:1,borderColor: 'black'}} key={ind} source={photo}/>
            <Text></Text>
            </View>
          );
        })}
        </ScrollView> */}
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={photos}
        renderItem={({item}) =>(
          <View style={{alignItems: 'center',padding: 5}}>
            <Image style={{width:100,height:100,borderRadius: 50,borderWidth:1,
            borderColor: 'black'}} source={item.imageUrl}/>
            <Text style={{fontSize: 18,color: 'black',fontWeight: 'bold'}}>{item.title}</Text>
          </View>
        )}
        />
      </View>
      </View>
    
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
    margin: 15,
  },
  search: {
    flexDirection: 'row',
    justifyContent:'space-between',
    margin: 15,
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderRadius: 8,
    width: "94%",
    height: 40
  }
})