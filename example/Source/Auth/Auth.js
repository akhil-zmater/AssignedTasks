import auth from '@react-native-firebase/auth';

export const Createuser = (email,password)=>{
    auth().createUserWithEmailAndPassword(
      email,
      password,
    );
}
export const Signout = ()=>{
   return auth().signOut();
}
export const Login =(email,password)=>{
  return  auth().signInWithEmailAndPassword(email,password);
}