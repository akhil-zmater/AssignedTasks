import { View, Text } from 'react-native'
import React,{useState} from 'react'
import ToggleSwitch from 'toggle-switch-react-native'
import { styles } from '../../../../../components/constants/styles/Styles'

const HeaderDetail = () => {
    const [isOn,setIson] = useState(false);
  return (
    <View style={styles.headerdir}>
    <View>
     <Text>Total Detail : <Text>100</Text></Text>
    </View>
    <View>
    <ToggleSwitch
        isOn={isOn}
        onColor="green"
        offColor='#ccc'
        label="Example label"
        size='small'
        onToggle={() => 
        setIson(!isOn)
        }
        />
    </View>
    </View>
  )
}

export default HeaderDetail