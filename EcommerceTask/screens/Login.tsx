import { View, Text,ImageBackground,StyleSheet,TouchableOpacity,KeyboardAvoidingView ,Platform,ScrollView,ToastAndroid} from 'react-native'
import React, {useState} from 'react'
import { TextInput } from 'react-native-paper';
import { loginuser } from '../utils/utils';

const Login = ({navigation}) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const [showErrors,setshowErrors] = useState(false);
    const [errors,setErrors] = useState({});

    const getErrors = (email,password) => {
        const errors = {};
        if (!email){
            errors.email = 'Please Enter Email'
        }else if (!email.includes('@') || !email.includes('.com')){
            errors.email = 'Enter Valid Email'
        }
        if (!password){
            errors.password = 'Please Enter Password';
        }else if (password.length < 7){
            errors.password = 'Password Must contain 7 characters'
        }
        return errors;
    }


    const loginHandler = () => {
        const errors = getErrors(email,password);
        if (Object.keys(errors).length > 0){
            setshowErrors(true);
            setErrors(showErrors && errors)
            // console.log(errors);
        }else {
             // navigation.navigate('Products')
             setErrors({});
             setshowErrors(false);
        // console.log('login')
            handlelogin({email: email,password: password})
        }
       
    }
    const handlelogin = ({email,password}) => {
        console.log("press")
        loginuser(email,password).then(() => {
            ToastAndroid.show('Logged in' ,ToastAndroid.SHORT)
        }).catch( error => {
            if (error.code === 'auth/invalid-login'){
                setErrors({email: 'Invalid Credentials',password: 'Invalid Credentials'})
                return;
            }
            if (error.code === 'auth/wrong-password'){
                setErrors({password: 'wrong password'})
                return;
            }
            console.log(error)
        });

    }

    const registerHandler = () => {
        navigation.navigate('Register')
    }

  return (
    

    <ImageBackground 
    source={require('../assets/register.jpg')}
    resizeMode='cover'
    style={styles.container}
    >
        <KeyboardAvoidingView style={{flex:1}}
        
    >
        <ScrollView showsVerticalScrollIndicator={false} style={styles.viewcon}>
           
            <Text style={styles.labeltext}>Email</Text>
            <TextInput 
            style={styles.inputcontainer} 
            placeholder='Email'
            value={email}
            onChangeText={text => setEmail(text)}
            />
            {errors.email && <Text style={styles.errors}>{errors.email}</Text>}
            <Text style={styles.labeltext}>Password</Text>
            <TextInput 
            secureTextEntry={secureTextEntry}
            right={<TextInput.Icon icon={secureTextEntry ? "eye-off" : 'eye'} onPress={() => {
                setSecureTextEntry(!secureTextEntry);
                return false
            } } style={{marginTop: 16}}  />}
            style={styles.inputcontainer} 
            placeholder='Password'
            value={password}
            onChangeText={text => setPassword(text)}
            maxLength={8}
            />
            {errors.password && <Text style={styles.errors}>{errors.password}</Text>}
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.labeltext} onPress={loginHandler}>Login</Text>
            </TouchableOpacity>
        
        <View style={styles.logintext}>
            <Text style={{color: 'black'}}>Don't Have An Account ?  </Text>
            <TouchableOpacity>
                <Text style={styles.lgnbtn} onPress={registerHandler}>Register</Text>
            </TouchableOpacity>
        </View>
        </ScrollView >
        </KeyboardAvoidingView>
     </ImageBackground>
     
  )
}

export default Login


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewcon:{
        marginTop: 140,
        margin: 10
    },
    inputcontainer: {
        height : 36,
        width: '100%',
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 6,
        justifyContent: 'center',
        padding: 4,
        backgroundColor: 'white',
        marginBottom: 5

    },
    labeltext: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    loginBtn:
    {
      width:"80%",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:30,
      marginLeft: 16,
      backgroundColor:"rgb(87, 216, 225)",
    },
    logintext: {
        flexDirection: 'row',
        margin: 15,
        marginHorizontal: 70
    },
    lgnbtn:{
        color: 'rgb(0, 183, 196)',
        fontWeight: 'bold'
    },
    errors:{ 
        color: 'tomato',
        fontWeight: '600'
    }
})