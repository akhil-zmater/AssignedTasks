import { View, Text ,FlatList,StyleSheet} from 'react-native'
import React from 'react'



const Today = () => {

  const data =[
    {
      id: 1,
      time: '09:00',
      title: 'Economics',
      description: 'Join the class',
      fixedtime: 'class : 09:00'
    },
    {
      id: 2,
      time: '10:00',
      title: 'BGMI',
      description: 'Join the class',
      fixedtime: 'class : 10:00'
    },
    {
      id: 3,
      time: '10:30',
      title: 'Cricket',
      description: 'Join the class',
      fixedtime: 'class : 10:30'
    },
    {
      id: 4,
      time: '12:15',
      title: 'Dance',
      description: 'Join the class',
      fixedtime: 'class : 12:15'
    },
    {
      id: 5,
      time: '15:15',
      title: 'Singing',
      description: 'Join the class',
      fixedtime: 'class : 15:15'
    },
    {
      id: 6,
      time: '16:00',
      title: 'Movies',
      description: 'Join the class',
      fixedtime: 'class : 16:00'
    },
    {
      id: 7,
      time: '18:00',
      title: 'LongDrive',
      description: 'Join the class',
      fixedtime: 'class : 18:00'
    },
    {
      id: 8,
      time: '18:00',
      title: 'ChillOut',
      description: 'Join the class',
      fixedtime: 'class : 18:00'
    },
  ];

  return (
    <View style={{flex:1,margin: 15}}>
      <Text style={{fontSize: 36,fontWeight: 'bold',color: 'black'}}>9 September</Text>
      <Text style={{margin: 10}}>Saturday</Text>
      <View>
        <FlatList 
        contentContainerStyle={{paddingBottom: 100}}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => (
          <View style={style.grid}>
              <Text style={{fontSize: 18,color: 'blue',fontWeight: '800'}}>{item.time}</Text>
            <View >
              <Text style={{fontSize: 18,color: 'blue',fontWeight: 'bold'}}>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
            <View>
              <Text style={{fontSize: 18,color: 'blue',fontWeight: '600'}}>{item.fixedtime}</Text>
            </View>
          </View>
        )}
        />
      </View>
    </View>
  )
}

export default Today
const style =  StyleSheet.create({
  grid: {
    flex: 1,
    backgroundColor: '#a2eded',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    padding: 15,
    margin: 10,
    borderRadius: 20,
    borderColor: '#c1eeef'
  }
})