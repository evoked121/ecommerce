import { View, Text, SafeAreaView, Platform, StatusBar } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home.jsx";
import ProductDetails from "./screens/ProductDetails.jsx";
import Toast from "react-native-toast-message";
import Cart from "./screens/Cart.jsx";
import ConfirmOrder from "./screens/ConfirmOrder.jsx";
import Payment from "./screens/Payment.jsx";
import Login from "./screens/Login.jsx";
import ForgetPassword from "./screens/ForgetPassword.jsx";
import SignUp from "./screens/SignUp.jsx";
import Verify from "./screens/Verify.jsx";
import Camera from "./screens/Camera.jsx";
import Profile from "./screens/Profile.jsx";
import UpdateProfile from "./screens/UpdateProfile.jsx";
import ChangePassword from "./screens/ChangePassword.jsx";
import Orders from "./screens/Orders.jsx";
import AdminPanel from "./screens/Admin/AdminPanel.jsx";
import UpdateProduct from "./screens/UpdateProduct.jsx";

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
          <Stack.Screen name="confirmorder" component={ConfirmOrder} />
          <Stack.Screen name="payment" component={Payment} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="forgetpassword" component={ForgetPassword} />
          <Stack.Screen name="signup" component={SignUp} />
          <Stack.Screen name="verify" component={Verify} />
          <Stack.Screen name="camera" component={Camera} />
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen name="updateprofile" component={UpdateProfile} />
          <Stack.Screen name="changepassword" component={ChangePassword} />
          <Stack.Screen name="orders" component={Orders} />
          <Stack.Screen name="updateproduct" component={UpdateProduct} />
          {/* Admin Routes*/}
          <Stack.Screen name="adminpanel" component={AdminPanel} />
        </Stack.Group>
      </Stack.Navigator>
      <Toast position="bottom" bottomOffset={20} />
    </NavigationContainer>
  );
};

export default Main;
