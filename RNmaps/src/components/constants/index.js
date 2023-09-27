const { StyleSheet } = require("react-native");
import { Dimensions } from "react-native";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
export const styles = StyleSheet.create({
    
        container:{
          flex:1
        },
        mapView:{
          width,
          height:height*0.9
        }
   
})