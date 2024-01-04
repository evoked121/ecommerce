import { View, Text, SafeAreaView, Platform, StatusBar } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home.jsx";
import ProductDetails from "./screens/ProductDetails.jsx";
import Toast from "react-native-toast-message";
import Cart from "./screens/Cart.jsx";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Group>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="productdetails" component={ProductDetails} />
          <Stack.Screen name="cart" component={Cart} />
        </Stack.Group>
      </Stack.Navigator>
      <Toast position="bottom" bottomOffset={20} />
    </NavigationContainer>
  );
};

export default Main;
