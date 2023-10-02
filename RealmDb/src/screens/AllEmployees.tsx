import { View, Text,FlatList ,StyleSheet,TouchableOpacity, Alert,TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React,{useEffect,useState} from 'react'
import Realm from 'realm';
import { EmployeeSchema } from './AddEmployee';
import CustomInput from '../components/CustomInput';

// import { useIsFocused } from '@react-navigation/native';



const AllEmployees = ({navigation}) => {
  const [update,setUpdate] =useState(false);
 let realm = new Realm({path: 'Employee',schema: [EmployeeSchema]})
  var Employee = realm.objects('Employee');

  const [name,setName] =  useState();
  const [salary,setSalary] = useState();
  const [email,setEmail] = useState();
  const [mobileNumber,setMobileNumber] = useState();

  const [editId,setEditId]=useState(null);

  // console.log(Employee);
  // const isFocused = useIsFocused();
  const deleteHandler = (item:any) => {
    realm.write(() => {
      realm.delete(item)
      navigation.navigate('Home')
    }) 
  }
  // useEffect(() => {
  //   isFocused && deleteHandler
  // },[isFocused])


  const deleteAlarm = (item) => {
    Alert.alert('Confirm Delete',
    'Are you sure want to delete',
    [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      {
        text: 'Ok',
        style:'destructive',
        onPress: () => deleteHandler(item)
      }
    ])
  }

 
  const updateHandle = (item) => {
    // Employee.filter(data => console.log(data.id))
  //  console.log(item)
  //  console.log(Employee)
   const result=Employee.filter(data => data.id === item.id)
  //  console.log(newArray)
   result.forEach(item => {setUpdate(true)
    setEditId(item.id);
  })
    // setUpdate(true)

  
  }

  const saveHandler = (item) => {
    realm.write(() => {
      realm.create('Employee',{id: item.id,name:name,salary:salary,email:email,mobileNumber:mobileNumber},'modified')
    })
    // setUpdate(false);
    setEditId(null)
  }
  return (
   <FlatList 
   data={Employee}
   renderItem={({item}) => {
    return (
      <View style={styles.renderview}>
        <View style={{flex:1}}>
        <View style={styles.flexrow}>
        <Text style={styles.text}>Employee Id :</Text>
         <Text style={styles.data}> {item.id}</Text>
        </View>
        <View style={styles.flexrow}>
        <Text style={styles.text}>Employee Name :</Text>
        
        {editId=== item.id ? 
        <>
        <TextInput style={styles.updateinput}
         defaultValue={item.name} 
         value={name} 
         onChangeText={text => setName(text)} />
        </>
        :<Text style={styles.data}>  {item.name}</Text>}
        
        </View>
        <View style={styles.flexrow}>
        <Text style={styles.text}>Employee Salary :</Text>
        
        {editId=== item.id? 
        <>
        <TextInput 
        style={styles.updateinput}
        defaultValue={item.salary}
        value={salary}
        onChangeText={text => setSalary(text)}
        keyboardType='number-pad'
        
        />
        </>
        : <Text style={styles.data}> $ {item.salary}</Text>}
        </View>
        <View style={styles.flexrow}>
        <Text style={styles.text}>Employee Email : </Text>
        {editId=== item.id?
         <>
         <TextInput style={styles.updateinput}
         defaultValue={item.email}
         value={email}
         onChangeText={text => setEmail(text)}
         />
         </>
         : <Text style={styles.data}> {item.email}</Text> }
        </View>
        <View style={styles.flexrow}>
        <Text style={styles.text}>Employee Mobile :</Text>
       
        {editId=== item.id ? 
        <>
        <TextInput style={styles.updateinput}
        defaultValue={item.mobileNumber}
        value={mobileNumber}
        onChangeText={text => setMobileNumber(text)}
        keyboardType='number-pad'
        maxLength={10}
        />
        </>
        : <Text style={styles.data}> {item.mobileNumber}</Text> }
        </View>
        </View>
        <View>
        <TouchableOpacity 
        onPress={() => 
          updateHandle(item)
        }
        style={{flexDirection: 'row',marginBottom: 5,margin: 5}}>
          <Icon name='edit' color='#ffffff' size={30}/>
        </TouchableOpacity >
        <TouchableOpacity onPress={() => deleteAlarm(item)} style={{margin: 5,marginBottom: 10}}>
        <Icon name='trash' color='#ff0000' size={30}/>
        </TouchableOpacity >
        {editId=== item.id? 
        <TouchableOpacity style={{margin: 5}} onPress={() =>saveHandler(item)}>
          <Icon name='save' color='green' size={26}/>
        </TouchableOpacity>
      :null}
        </View>
      </View>
    );
   }}
   />
  )
}

export default AllEmployees

const styles = StyleSheet.create({
  renderview: {
    backgroundColor: '#72cde4',
    margin: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  flexrow: {
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black'
  },
  data: {
    fontSize:18,
    fontWeight: 'bold',
    color: '#000000'
  },
  updateinput: {
    backgroundColor: '#b3dde8',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    // marginTop: -10,
    // borderWidth: 1,
    // height: 40,
    width: '50%',
    // marginVertical: 0,
    paddingVertical: 0,
    borderRadius:15,
    margin:1
    
    
  }
})