import AsyncStorage from '@react-native-async-storage/async-storage';


export const SetItem = async(data)=>{
try{
    const data1={...data};
    await AsyncStorage.setItem('akhil',JSON.stringify({...data1}));
  
}
catch(error){
console.log(error,'error manual');
}
}
export const GetItem = async()=>{
try{
   const saved= await AsyncStorage.getItem('akhil');
   if(saved !== null){
    console.log(JSON.parse(saved));
   }
}
catch(error){
    console.log(error);
}
}