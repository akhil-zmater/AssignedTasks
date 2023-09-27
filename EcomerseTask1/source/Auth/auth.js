import auth from '@react-native-firebase/auth';

export const CreateUser = (email,password) => {
    return auth().createUserWithEmailAndPassword(email,password);
}

export const loginUser = (email,password) => {
    return auth().signInWithEmailAndPassword(email,password);
}

export const signout = () => {
    return auth().signOut();
}
