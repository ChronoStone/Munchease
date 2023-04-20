import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import {
  Home,
  Product,
  Cart,
  Success,
  Login,
  CodeScanner,
  Orders,
  Welcome
} from "./screens";

import { OrderModal } from "./components";

import Tabs from "./navigation/tabs";

import { useFonts } from "expo-font";

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications


const Stack = createStackNavigator();

const App = () => {

  let [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Login"}
      >
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CodeScanner" component={CodeScanner} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="OrderModal" component={OrderModal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
