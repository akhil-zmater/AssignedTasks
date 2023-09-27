import { View, Text,StyleSheet,Alert } from 'react-native'
import {TextInput} from 'react-native-paper';
import React ,{useState}from 'react';
import CustomButton from '../Components/CustomButton';
import Realm from 'realm';
import { Employee } from './MainScreen';


const UpdateScreen = ({route,navigation}) => {
    const data1=route.params;
   
    const [data, setData] = useState({
      empid: data1.item.empid,
      empname: data1.item.empname,
      empage: data1.item.empage,
      empsal: data1.item.empsal,
    });
    const realm= new Realm({path:'Employee',schema:[Employee]});

    function inputdata(identifier, enteredtext) {
      setData(curinpu => {
        return {...curinpu, [identifier]: enteredtext};
      });
    }
    const updatehandler=()=>{
    realm.write(()=>{
 realm.create('Employee', { empid: parseInt(data.empid),empname: data.empname,empage: parseInt(data.empage),empsal: parseInt(data.empsal)},'modified');
    })
    navigation.navigate('main');
    Alert.alert('Your Data Is UPdated');
    }
  return (
    <View>
      <TextInput
        label="Emp Id"
       value={String(data.empid)}
        onChangeText={inputdata.bind(this, 'empid')}
        keyboardType="number-pad"
       
      />
      <TextInput
        label="Emp Name"
       value={String(data.empname)}
        onChangeText={inputdata.bind(this, 'empname')}
      />
      <TextInput
        label="Emp Age"
        value={String(data.empage)}
        onChangeText={inputdata.bind(this, 'empage')}
        keyboardType="number-pad"
      />
      <TextInput
        label="Emp salary"
        value={String(data.empsal)}
        onChangeText={inputdata.bind(this, 'empsal')}
        keyboardType="number-pad"
      />
      <View style={sty.button}>
        <CustomButton custompress={updatehandler}>Update</CustomButton>
      </View>
    </View>
  );
}

export default UpdateScreen;
const sty = StyleSheet.create({
  button: {
    height: 50,
    width: 100,
    marginHorizontal: 150,
    marginVertical: 30,
    padding: 8,
    backgroundColor: 'skyblue',
    borderRadius: 20,
  },
});