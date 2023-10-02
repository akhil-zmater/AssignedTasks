import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView,{Marker} from 'react-native-maps'
import { styles } from './src/components/constants'
import Geolocation from '@react-native-community/geolocation';



const App = () => {
const [region,setRegion] = useState({
  latitude: 17.3850,
        longitude: 78.4867,
        latitudeDelta: 1,
        longitudeDelta:1
})
const [currentLocation,setCurrentLocation] = useState(null);
  const geolocation = () => {
    Geolocation.getCurrentPosition((position) => {
      const {latitude,longitude} = position.coords;
      setCurrentLocation({latitude,longitude})
    },
    error => {
      console.log(error.message)
    },
    {enableHighAccuracy: true, timeout: 20000 , maximumAge: 1000}
    );
  };

  useEffect(()=>{
    geolocation();
  },[])

  // console.log(currentLocation)
  // console.log(region)
  return (
    <View style={styles.container}>
      <MapView 
      style={styles.mapView}
      initialRegion={region}
      onRegionChange={region => setRegion(region)}
      zoomEnabled={true}
      zoomControlEnabled={true} 
      
      >
        <Marker title='location' tappable draggable coordinate={region}/>
      </MapView>
    </View>
  )
}

export default App

