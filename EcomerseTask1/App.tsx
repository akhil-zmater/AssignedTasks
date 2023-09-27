import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import auth from "@react-native-firebase/auth";

import ProductScreen from "./source/Screens/ProductScreen";
import ProductDetails from "./source/Screens/ProductDetails";
import Login from "./source/Screens/Login";
import Register from "./source/Screens/Register";
import CartStore from "./source/Screens/CartStore";
import Icon from "react-native-vector-icons/AntDesign";
import { Provider } from "react-redux";
import { Store } from "./source/Redux/Store";

import { PersistGate } from "redux-persist/lib/integration/react";
import { store,persistor } from "./source/Redux/Store";
// import addtoCart from './source/Screens/ProductDetails'

const Stack = createNativeStackNavigator();

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();


  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

  return (
    <Provider store={store}>
       <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator>
          {user ? (
            <>
              <Stack.Screen
                name="Product Screen"
                component={ProductScreen}
                options={({ navigation }) => ({
                  title: "Products",
                  headerRight: () => (
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity onPress={() => navigation.navigate("Cart Store")}>
                        {/* <Text>{addtoCart}</Text> */}
                        <Icon name="shoppingcart" size={40} color="black" />
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => auth().signOut()} >
                        <Icon name="logout" size={30} color="black" />
                      </TouchableOpacity>
                    </View>
                  ),
                })}
              />
              <Stack.Screen name="Product Details" component={ProductDetails} />
              <Stack.Screen
                name="Cart Store"
                component={CartStore}
                options={{ title: "Cart Store" }}
              />
              {/* <Stack.Screen
                name="Login Screen"
                component={Login}
                // options={{ headerShown: false }} 
              /> */}
            </>
          ) : (
            <>
              <Stack.Screen name="Login Screen" component={Login} />
              <Stack.Screen name="Register Screen" component={Register} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}