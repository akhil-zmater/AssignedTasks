import { View, Text,Button ,Alert} from 'react-native'
import React, { useRef, useState } from 'react'

import { styles } from './src/constants'
import MapView ,{Marker,Polyline} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
const App = () => {
  const GoogleKey = 'AIzaSyBv3nEjC-cHQqKGpQMQaZm_FxAI5aOyHkw';
  const [region, setRegion] = useState({
    longitude: 78.491684,
    latitude: 17.38714,
    latitudeDelta: 0.7,
    longitudeDelta: 0.8,
  });
  const [data,setData]=useState({});
  const mapref=useRef(null);
  const maharashtra = {
    longitude: 72.8777,
    latitude: 19.076,
    latitudeDelta: 0.7,
    longitudeDelta: 0.8,
  };
  const secbadnavigate=()=>{
    mapref.current.animateToRegion(maharashtra, 3 * 1000);
    
  }
  console.log(data,data.latitude);
  return (
    <View style={styles.con}>
      <MapView
        style={styles.mapcon}
        ref={mapref}
        zoomEnabled
        zoomControlEnabled
        initialRegion={region}
        onRegionChange={region => {
          setRegion(region);
        }}>
        <Marker
          coordinate={{latitude: 17.38714, longitude: 78.491684}}
          draggable
          pinColor="red"
          title="Hyderabad"
          description="Charminar,Secunderabad"  
          onDragEnd={e => setData((e.nativeEvent.coordinate))}
        />
        {/* <Overlay image={require('./src/assets/location.jpg')} opacity={0.6} bounds={}/> */}
        <Marker
          coordinate={{
            latitude: maharashtra.latitude,
            longitude: maharashtra.longitude,
          }}
          title="Mumbai"
          description="Famous for Festivals"
        />
 <MapViewDirections origin={region} destination={maharashtra} apikey={GoogleKey} strokeColor='blue' strokeWidth={2}/>
      </MapView>

      <Button title="Go to Secbad" onPress={secbadnavigate} />
    </View>
  );
}

export default App