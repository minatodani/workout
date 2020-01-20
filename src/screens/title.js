import React from "react";
import { View, Text } from "react-native";
// import { Input } from "react-native-elements";
import { AppLoading, Font } from "expo";
import { Asset } from "expo-asset";
import fonts from "./src/fonts";
import images from "./src/images";

class Title extends React.Component {
  static defaultProps = {
    skipLoadingScreen: false
  };
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      name: ""
    };
  }

  loadResourcesAsync = async () => {
    await Asset.loadAsync(object.keys(images).map(key => images[key]));
    await Font.loadAsync(fonts);

    return true;
  };

  render() {
    const { isLoadingComplete } = this.state;
    const { skipLoadingScreen } = this.props;

    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={error => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      );
    }
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            color: "black",
            fontSize: 60,
            fontFamily: "Avenir",
            fontWeight: "bold"
          }}
        >
          WORK
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 60,
            fontFamily: "Avenir",
            fontWeight: "bold"
          }}
        >
          OUT
        </Text>
      </View>
    );
  }
}
