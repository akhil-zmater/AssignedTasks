import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async(value) => {
   
    await AsyncStorage.setItem('item',JSON.stringify(value));
  
   
}

export const getItem = async() => {
   
    const savedItem =  await AsyncStorage.getItem('item');
    if (savedItem !== null){
       console.log(savedItem)
       return JSON.parse(savedItem);
       
    //  console.log(currentItem)
    // return currentItem;
    }
  
}