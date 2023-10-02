import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './src/screens/Navigation'
import { RealmProvider } from '@realm/react'
const App = () => {
  return (
    <RealmProvider>
    <Navigation />
    </RealmProvider>
  )
}

export default App