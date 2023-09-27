import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function WelcomeCustomButton({onPress, children}){
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.text}>{children}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 23,
        borderRadius: 8,
        borderWidth: 1.5,
        padding: 10,
        borderColor: 'black',
        color: 'black',
        backgroundColor: 'lightblue',
        width: 150,
        textAlign: 'center'
    }
});