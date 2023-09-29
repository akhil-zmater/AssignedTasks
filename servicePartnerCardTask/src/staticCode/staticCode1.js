import axios from "axios";
import { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView, Pressable } from 'react-native';
import { API } from "../Api/Api";
import { styles } from "../constants/constants";


export default function StaticCode1() {
    const [data,setData] = useState([]);

    useEffect(() => {
        async function func() {
            const res = await axios.get(API);
            const result = await res.data;
            setData(result);
        }
        func();
    },[]);

    const renderItem = ({item}) => (
        <View style={styles.container}>
            <Text style={styles.outerText}><Text style={styles.innerText}>ID : </Text>{item.id}</Text>
            <Text style={styles.outerText}><Text style={styles.innerText}>Title : </Text>{item.title}</Text>
            <Text style={{textAlign: 'justify', color: 'lightgray'}}>______________________________________________</Text>
            <Text style={styles.outerText}><Text style={styles.innerText}>Body : </Text>{item.body}</Text>
        </View>
    );

    return(
        <View>
            <ScrollView horizontal style={styles.dateText}>
                    <Text style={styles.specificDate}>TODAY 12  |</Text>
                    <Text style={styles.specificDate}>TOMORROW 13  |</Text>
                    <Text style={styles.specificDate}>9th SEP: 14  | </Text>
                    <Text style={styles.specificDate}>10th SEP: 15  |</Text>
                    <Text style={styles.specificDate}>11th SEP: 16  |</Text>
                    <Text style={styles.specificDate}>12th SEP: 17  |</Text>
                    <Text style={styles.specificDate}>13th SEP: 18  |</Text>
                    <Text style={styles.specificDate}>14th SEP: 19</Text>                
            </ScrollView>
            <Pressable style={styles.topText}>
                <Text style={styles.categories}>All</Text>
                <Text style={styles.categories}>Drop Step</Text>
                <Text style={styles.categories}>Instant</Text>
                <Text style={styles.categories}>Pickup Drop</Text>
            </Pressable>
            <FlatList 
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}