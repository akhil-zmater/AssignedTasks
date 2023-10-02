import auth from '@react-native-firebase/auth';

export const Createuser = (email,password) => {
    // console.log(email,password)
    return auth().createUserWithEmailAndPassword(email,password);
}

export const loginuser = (email,password) => {
    return auth().signInWithEmailAndPassword(email,password);
}

export const signout = () => {
    return auth().signOut();
}