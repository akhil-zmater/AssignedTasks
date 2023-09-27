import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getToken()
  }
}

const getToken = async() => {
   const Token = await AsyncStorage.getItem('Token');
   console.log(Token,'old Token');
   if (!Token){
     try {
      const Token = await messaging().getToken();
      console.log(Token,'Newly Generated Token')
      await AsyncStorage.setItem('Token',Token)
      
    } catch (error) {
      console.log(error)
    }
   }
}

export const notifications = () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',remoteMessage.notification);
  });
  messaging().onMessage(async remoteMessage => {
    console.log('Received Notification In ForeGround', remoteMessage )
  })
  messaging()
  .getInitialNotification()
  .then(remoteMessage => {
    if (remoteMessage) {
      console.log(
        'Notification caused app to open from quit state:',remoteMessage.notification);
    }
  });
}
