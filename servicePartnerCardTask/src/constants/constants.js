import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        margin:10,
        padding: 10,
        borderRadius: 6,
        borderColor:'gray'
    },
    dateText: {
        flexDirection: 'row',
        margin: 6,
        padding: 4,
        borderWidth:1,
        borderRadius:6
    },
    categories: {
        borderWidth:0.5,
        padding: 8,
        marginTop:5,
        borderRadius: 5
    },
    specificDate: {
        margin:2,
        justifyContent: 'space-between'
    },
    topText: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    outerText: {
      fontSize: 15,
      color: 'black'
    },
    innerText: {
      fontSize:18,
      color: 'black',
      fontWeight: 'bold'
    },
    text: {
        fontSize: 35,
        padding: 5,
        backgroundColor: 'black',
        color: 'white'
    }
  });