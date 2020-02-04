import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  ImageStore,
  // TouchableOpacity,
  TouchableHighlight,
  ScrollView
} from "react-native";
// import { Input, Button } from "react-native-elements";
// import { AppLoading, Font } from "expo";
// import { Asset } from "expo-asset";
// import fonts from "./src/fonts";
// import images from "./src/images";
// import { LinearGradient } from "expo-linear-gradient";
import firebase from "firebase";
// import config from "./config/firebase";
// import List from "./list";
import PropTypes from "prop-types";

class Demo extends React.Component {
  render() {
    // console.log(data);
    return (
      <View>
        <Text>{this.props.navigation.state.params.abc[8][1]}</Text>
      </View>
    );
  }
}
export default Demo;
