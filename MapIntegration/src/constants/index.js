import {StyleSheet,Dimensions} from 'react-native'
const width=Dimensions.get('screen').width;
const height =Dimensions.get('screen').height
export const styles=StyleSheet.create({
    con:{
        flex:1,
        
    },
    mapcon:{
        width:width * 0.9,
        height:height*0.9,
        marginVertical:10,
        marginHorizontal:10,
    }
})