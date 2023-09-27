import { TextInput } from "react-native-paper";

import { View, Text ,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import CustomButton from "../Components/CustomButton";


import Realm, {ObjectSchema} from 'realm';
export class Employee extends Realm.Object<Employee> {
  empid!: 'int';
  empname!: 'string';
  empage!: 'int';
  empsal!: 'int';
  static schema: ObjectSchema = {
    name: 'Employee',
    properties: {
      empid: 'int?',
      empname: 'string',
      empage: 'int',
      empsal: 'int',
    },
    primaryKey: 'empid',
  };
}

const MainScreen = ({navigation}) => {
   const realm=new Realm({path:'Employee',schema:[Employee]});
   const abc=realm.objects('Employee');
   console.log(abc);
    const [data,setData] =useState({
        empid:'',
        empname:'',
        empage:'',
        empsal:'',
    });
 function inputdata(identifier,enteredtext){
setData((curinpu)=>{
return{...curinpu,[identifier]:enteredtext};
});
}
const submithandler=()=>{
realm.write(()=>{
    realm.create('Employee',{empid:parseInt(data.empid),empname:data.empname,empage:parseInt(data.empage),empsal:parseInt(data.empsal)})
});

setData((cur)=>{
    return {...cur,empid:'',empage:'',empname:'',empsal:''}
})
navigation.navigate('main');
};
   
  return (
    <View>
      <TextInput
        label="Emp Id"
        value={data.empid}
        onChangeText={inputdata.bind(this, 'empid')}
        keyboardType="number-pad"
      />
      <TextInput
        label="Emp Name"
        value={data.empname}
        onChangeText={inputdata.bind(this, 'empname')}
      />
      <TextInput
        label="Emp Age"
        value={data.empage}
        onChangeText={inputdata.bind(this, 'empage')}
        keyboardType="number-pad"
      />
      <TextInput
        label="Emp salary"
        value={data.empsal}
        onChangeText={inputdata.bind(this, 'empsal')}
        keyboardType="number-pad"
      />
      <View style={sty.button}>
        <CustomButton custompress={submithandler}>Submit</CustomButton>
      </View>
    </View>
  );
}

export default MainScreen
const sty=StyleSheet.create({
    button:{
        height:50,
        width:100,
        marginHorizontal:150,
        marginVertical:30,
        padding:8,
        backgroundColor:'skyblue',
        borderRadius:20,
    }
});