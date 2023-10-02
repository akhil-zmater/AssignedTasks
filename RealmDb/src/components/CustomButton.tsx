import { View, Text,TouchableOpacity ,StyleSheet} from 'react-native'
import React from 'react'

const CustomButton = ({children,onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#61b4cd',
        
        margin: 10,
        padding: 8,
        borderRadius: 15,
        height: 50,
       alignItems: 'center',
       paddingVertical: 10,
       width: '60%',
       marginLeft: 70,

        
    },
    text :{
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})