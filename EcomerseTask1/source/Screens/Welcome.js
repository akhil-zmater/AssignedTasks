import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function Welcome({navigation}) {

    function startHandler() {
        navigation.navigate('Login Screen')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome Screen</Text>
            {/* <Image source={require('../assets/image.jpg')}/> */}
            <Image source={{uri: 'https://assets-global.website-files.com/637610b6e8be873142dadb34/63e231574133e944d07d64f9_7-Ecommerce-Technology-Trends-that-Empower-Businesses-Updated.png'}} style={styles.image}/>
            <Button title="let's use" onPress={startHandler} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#defff8'
    },
    text: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#0b5c8f',
        margin:10
    },
    image: {
        width: '95%',
        height: '35%',
        borderRadius:12,
        marginBottom:10        
    }
});