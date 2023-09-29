import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8fcce5',
        margin:10,
        borderRadius:10,
        padding: 5
    },
    label: {
        fontSize: 18,
        color:'#8b1a1a',
        fontWeight: 'bold'
    },
    data: {
        color:'#000000',
        fontWeight: '500'
    },
    labelStyle:{ 
        color: "black",
        fontWeight: "900" 
    },
    headerdir:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:10
    } 
})