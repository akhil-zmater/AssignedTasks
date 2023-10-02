import { View, Text,ImageBackground,StyleSheet,TouchableOpacity,KeyboardAvoidingView ,Platform,ToastAndroid} from 'react-native'
import React,{useState} from 'react'
import { TextInput } from 'react-native-paper';
import { Createuser } from '../utils/utils';



const Register = ({navigation}) => {

    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmpassword,setConfirmpassword] = useState('');
    const [secureTextEntry,setsecureTextEntry] = useState(true);

    const [showErrors,setShowErrors] = useState(false);
    const [errors,setErrors] = useState({});

    const getErrors = (username,email,password,confirmpassword) => {
        const errors = {};
         if (!email){
            errors.email = 'Please Enter Email';
        }else if (!email.includes('@')|| !email.includes('.com')){
            errors.email = 'please enter Valid Email'
        }
        if (!password){
            errors.password = 'Please Enter Password'
        } else if (password.length < 7 ){
            errors.password = 'password must contain 7 characters'
        }
        if (!confirmpassword){
            errors.confirmpassword = 'Please Enter Password'
        } else if (confirmpassword.length < 7 ){
            errors.confirmpassword = 'password must contain 7 characters'
        } else if (password !== confirmpassword ){
            errors.confirmpassword = 'password not matched'
        } 
         if (!username){
            errors.username = 'Please Enter UserName'
        }
        return errors;
    }

    const loginHandler =() => {
        navigation.navigate('Login')
    }

    const RegisterHandler = () => {
        const errors = getErrors(username,email,password,confirmpassword);
        if (Object.keys(errors).length > 0){
            setShowErrors(true);
            setErrors(showErrors && errors)
        }else {
            setErrors({});
            setShowErrors(false)
            console.log('registered')
            UserRegister(email,password);
           
           
        }
        
    }

const UserRegister= (email,password) => {
    // console.log(email,password)
    Createuser(email,password).then(() => {
        ToastAndroid.show('Account Created',ToastAndroid.SHORT)
    }).catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
            return setErrors({email : 'Email Already in Use'})
        }
        if (error.code === 'auth/invalid-email'){
           return setErrors({email: 'Email Is Invalid'})
        }
        setShowErrors(false);
        setErrors({})
        console.log(error)
    })
}


  return (
    
    <ImageBackground 
    source={require('../assets/register.jpg')}
    resizeMode='cover'
    style={styles.container}
    >
    <KeyboardAvoidingView 
    enabled
    behavior={Platform.OS === 'android' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.OS==='android' ? '60' : 100}
    >
        <View  style={styles.viewcon}>
            <Text style={styles.labeltext}>UserName</Text>
            <TextInput 
            style={styles.inputcontainer} 
            placeholder='UserName'
            value={username}
            onChangeText={text => setUsername(text)}
            />
            {errors.username && <Text style={styles.errors}>{errors.username}</Text>}
            <Text style={styles.labeltext}>Email</Text>
            <TextInput 
            style={styles.inputcontainer} 
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            />
            {errors.email && <Text style={styles.errors}>{errors.email}</Text>}
            <Text style={styles.labeltext}>Password</Text>
            <TextInput 
            secureTextEntry={secureTextEntry}
            right={<TextInput.Icon icon={secureTextEntry ? "eye-off": 'eye'} onPress={() => {
                setsecureTextEntry(!secureTextEntry);
                return false;
            }} style={{marginTop: 20}}/>}
            style={styles.inputcontainer} 
            placeholder='Password'
            value={password}
            onChangeText={text => setPassword(text)}
            />
            {errors.password && <Text style={styles.errors}>{errors.password}</Text>}
            <Text style={styles.labeltext}>Confirm Password</Text>
            <TextInput 
            style={styles.inputcontainer} 
            secureTextEntry={secureTextEntry}
            right={<TextInput.Icon icon={secureTextEntry ? "eye-off" : 'eye'} onPress={() => {
                setsecureTextEntry(!secureTextEntry);
                return false
            }} style={{marginTop: 20}}/>}
            placeholder='Confirm Password'
            value={confirmpassword}
            onChangeText={setConfirmpassword}
            />
            {errors.confirmpassword && <Text style={styles.errors}>{errors.confirmpassword}</Text>}
            <TouchableOpacity style={styles.loginBtn} onPress={RegisterHandler}>
                <Text style={styles.labeltext}>Register</Text>
            </TouchableOpacity>
        
        <View style={styles.logintext}>
            <Text style={{color: 'black'}}>Already Have An Account ?  </Text>
            <TouchableOpacity>
                <Text style={styles.lgnbtn} onPress={loginHandler}>Login</Text>
            </TouchableOpacity>
        </View>
        </View>
        </KeyboardAvoidingView>
     </ImageBackground>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewcon:{
        marginTop: 50,
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
        padding: 6,
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
    errors: {
        color: 'tomato',
        fontWeight: '600'
    }
})