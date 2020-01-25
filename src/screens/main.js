if (!firebase.apps.length) {
  firebase.initializeApp({});
}
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  ImageStore
} from "react-native";
import { Input, Button } from "react-native-elements";
import { AppLoading, Font } from "expo";
import { Asset } from "expo-asset";
import fonts from "./src/fonts";
import images from "./src/images";
import { LinearGradient } from "expo-linear-gradient";
import firebase from "firebase";
import firebaseConfig from "./config/firebase";

// firebase.initializeApp(firebaseConfig);

class main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {/* <ElevatedView elevation={3} style={styles.stayElevated}  */}
        <View style={styles.hole} ele>
          <View style={styles.left}>
            <View style={{ flex: 1, marginTop: 17, marginLeft: 15 }}>
              <Image
                source={images.sample}
                style={styles.pict}
                resizeMode="cover"
                // resizeMethod="scale"
              ></Image>
            </View>
          </View>

          <View style={styles.right}>
            <View>
              <Text
                style={{
                  fontFamily: "Hiragino Sans",
                  fontSize: 14,
                  fontWeight: "500",
                  color: "#707070",
                  margin: 7,
                  marginLeft: 0
                }}
              >
                顧客管理ソフト
              </Text>
            </View>
            <View>
              <Text style={{ color: "#707070", height: 75, width: 240 }}>
                お客様の業務効率を改善します。膨大な事務処理を一手に担う管理ツールです。
              </Text>
            </View>
            <View style={styles.cercle}>
              <Text style={{ margin: 3, color: "#707070", fontSize: 11 }}>
                ストック型
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#707070",
                  paddingTop: 6,
                  textAlign: "right",
                  paddingRight: 30
                }}
              >
                株式会社sales
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default main;

const styles = StyleSheet.create({
  hole: {
    flexDirection: "row",
    height: 190,
    borderColor: "#707070",
    borderWidth: 0.3
    // shadowColor: "black",
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowOpacity: 1
  },
  left: {
    flex: 3
  },
  right: {
    flex: 5,
    paddingTop: 16,
    paddingBottom: 12
  },
  pict: {
    width: 120,
    height: 150,
    borderRadius: 15
  },
  cercle: {
    borderColor: "#707070",
    borderStyle: "solid",
    borderWidth: 0.7,
    width: 70,
    borderRadius: 10,
    alignItems: "center"
    // backgroundColor: "blue"
  },
  stayElevated: {
    width: 100,
    height: 100,
    margin: 10,
    backgroundColor: "white"
  }
});
