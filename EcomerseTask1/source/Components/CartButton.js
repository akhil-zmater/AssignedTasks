import { Text, View, StyleSheet,TouchableOpacity } from "react-native";

export default function CartButton({onPress, children}) {
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
        borderWidth: 2,
        padding: 10,
        borderColor: 'black',
        color: 'black',
        backgroundColor:'#9edbd8',
        width: 150,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:110
    }
});