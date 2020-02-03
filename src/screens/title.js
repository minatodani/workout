import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Animated } from "react-native";
// import { Input } from "react-native-elements";
import { AppLoading, Font } from "expo";
import { Asset } from "expo-asset";
import fonts from "../fonts";
import images from "../images";
// import { delay } from "rxjs-compat/operator/delay";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

class Title extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    const move = () => navigate("Login1");
    setTimeout(move, 3000);

    return (
      <SafeAreaView style={{ flex: 1, borderTopColor: "white" }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={styles.text}>WORK</Text>
          <Text style={styles.text}>OUT</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default Title;

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 60,
    fontFamily: "Avenir",
    fontWeight: "bold"
  }
});
