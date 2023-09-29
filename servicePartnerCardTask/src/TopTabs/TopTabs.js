import { Text } from "react-native";
import { styles } from "../constants/constants";
import Drops from "../Screens/Bookings/Drops/Drops";
import New from "../Screens/Bookings/New/New";
import Pickups from "../Screens/Bookings/Pickups/Pickups";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const TopTab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
    return (
        <>
            <Text style={styles.text}>WHEELIX</Text>
            <TopTab.Navigator>
                <TopTab.Screen name='New' component={New} />
                <TopTab.Screen name='Pickups' component={Pickups}/>
                <TopTab.Screen name='Drops' component={Drops}/>
            </TopTab.Navigator>
        </>
    );
}

