import { View, Text, FlatList,Animated } from 'react-native'
import React,{useState,useEffect} from 'react'
import { FetchData } from '../../../../../API/Utils'
import { styles } from '../../../../../components/constants/styles/Styles'




const Newlist = () => {

 
    const [data,setData] = useState([])

    const fetch =async () =>{
        const result = await FetchData();
        setData(result);
    }
useEffect(() => {
    fetch()
},[])

const renderview= ({item}) => {
    return(
        <View style={styles.container}>
         <Text style={styles.label}>Id : <Text style={styles.data}>{item.id}</Text></Text>
           <Text style={styles.label}>Title : <Text style={styles.data}>{item.title}</Text></Text>
           <Text style={styles.label}>Body : <Text style={styles.data}>{item.body}</Text></Text>
        </View>
    );
}

  return (
    
    <FlatList 
    
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={renderview}
    />
   
  )
}

export default Newlist