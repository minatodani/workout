import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   TextInput,
//   KeyboardAvoidingView
// } from "react-native";
// import { Input, Button } from "react-native-elements";
// import { AppLoading, Font } from "expo";
// import { Asset } from "expo-asset";
// import fonts from "./src/fonts";
// import images from "./src/images";
// import { LinearGradient } from "expo-linear-gradient";
// import firebase from "firebase";
// import firebaseConfig from "./config/firebase";
// import { Navigation } from "react-native-navigation";
import "react-native-gesture-handler";
// import { StackNavigator } from "react-navigation";
import Login1 from "./src/screens/login1";
import Login2 from "./src/screens/login2";
import Main from "./src/screens/main";
import Title from "./src/screens/title";
import Detail from "./src/screens/detail";
import Demo from "./src/screens/demo";
import Login from "./src/screens/login";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const RootStack = createStackNavigator(
  {
    Title: { screen: Title, navigationOptions: { header: null } },
    Login: { screen: Login, navigationOptions: { header: null } },
    Login1: { screen: Login1, navigationOptions: { header: null } },

    Login2: { screen: Login2, navigationOptions: { header: null } },
    Main: {
      screen: Main,
      navigationOptions: { header: null }
    },
    Detail: { screen: Detail, navigationOptions: { header: null } },
    Demo: {
      screen: Demo,
      navigationOptions: { header: null }
    }
  },
  {
    initialRouteName: "Login"
  }
);
const AppContainer = createAppContainer(RootStack);

export default AppContainer;
