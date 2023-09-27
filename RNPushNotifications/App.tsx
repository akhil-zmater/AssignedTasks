import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { notifications, requestUserPermission } from './utils/notification';


const App = () => {

  useEffect(() => {
    requestUserPermission(),
    notifications()
  },[]);
  
  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  )
}

export default App
const styles= StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  }
})