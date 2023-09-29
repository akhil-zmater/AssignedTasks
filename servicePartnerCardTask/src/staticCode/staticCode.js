import axios from "axios";
import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { API } from "../Api/Api";
import { styles } from "../constants/constants";


export default function StaticCode() {
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
            <View style={styles.topText}>
                <Text style={styles.outerText}>Pending Requests : </Text>
                <Text style={styles.outerText}>Instant Bookings </Text>
            </View>
            <FlatList 
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}