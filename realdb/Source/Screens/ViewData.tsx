import { View, Text,FlatList, StyleSheet, Alert, TextInput, Pressable} from 'react-native'
import React, { useEffect, useState } from 'react';
import Realm from 'realm';
import { Employee } from './MainScreen';
import CustomIcon from '../Components/CustomIcon';
const ViewData = ({navigation}) => {
  
    const realm = new Realm({path: 'Employee', schema: [Employee]});
    const abc = realm.objects('Employee');
   
    const deletefun =(dataid)=>{
realm.write(()=>{
  realm.delete(dataid);
  Alert.alert('Employee is deleted');
  navigation.navigate('main');
})

    }
   
  return (
    <FlatList
      data={abc}
      renderItem={({item}) => (
        <View style={sty.con}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={sty.txt}>Employee ID:</Text>
              <Text style={sty.datatxt}>{item.empid}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={sty.txt}>Employee Name: </Text>
              <Text style={sty.datatxt}>{item.empname}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={sty.txt}>Employee Age: </Text>
              <Text style={sty.datatxt}>{item.empage}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={sty.txt}>Employee Salary: </Text>
              <Text style={sty.datatxt}>{item.empsal}</Text>
            </View>
          </View>
          <View style={sty.icon}>
            <CustomIcon
              iconname="delete"
              iconcolor="red"
              iconpress={() => {
                deletefun(item);
              }}
            />
            <CustomIcon iconname='edit' iconcolor='blue' iconpress={()=>navigation.navigate('update',{item})}/>
          </View>
        </View>
      )}
    />
  );
}

export default ViewData
const sty = StyleSheet.create({
  txt: {
    fontSize: 16,
    color:'black',
    fontWeight:'bold'
  },
  datatxt: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#ff8000',
  },
  con: {
    margin: 10,
    borderWidth: 2,
    flexDirection:'row',
justifyContent:'space-between'
  },
  icon:{

 justifyContent:'space-around',
  marginRight:15,
    
  }
});