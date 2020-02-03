import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  TouchableHighlight
} from "react-native";
import { Input, Button } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
// import GradientButton from "react-native-gradient-buttons";
import { AppLoading, Font } from "expo";
import { Asset } from "expo-asset";
// import fonts from "./src/fonts";
// import images from "./src/images";
// import { LinearGradient } from "expo-linear-gradient";
// import firebase from "firebase";
// import firebaseConfig from "./config/firebase";
// import { Navigation } from "react-native-navigation";
// import "react-native-gesture-handler";
// import { StackNavigator } from "react-navigation";
// import Login1 from "./src/screens/login1";
// import Login2 from "./src/screens/login2";
// import Main from "./src/screens/main";
// import Title from "./src/screens/title";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

class Detail extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "snow" }}>
        <ScrollView>
          <View style={styles.hole}>
            <View style={styles.sub_hole}>
              <View style={styles.first}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  顧客管理ソフト[ sales v ]
                </Text>
              </View>
              <View style={styles.second}>
                <View>
                  <Image
                    source={require("../../assets/images/the-honest-company-iop1VUrHF_U-unsplash.jpg")}
                    style={styles.pict}
                  />
                </View>
              </View>
              <View style={{ alignItems: "center" }}>
                <View style={styles.fee}>
                  <View style={styles.fee_tp}>
                    <Text style={styles.fee_text}>販売報酬</Text>
                  </View>
                  <View>
                    <View style={styles.cercle}>
                      <Text
                        style={{ margin: 3, color: "#707070", fontSize: 11 }}
                      >
                        ストック
                      </Text>
                    </View>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text
                      style={{ fontSize: 38, color: "red", fontWeight: "bold" }}
                    >
                      4000
                    </Text>
                    <Text style={{ marginLeft: 160, fontSize: 14 }}>/ 月</Text>
                  </View>
                </View>
              </View>
              <View style={styles.pro}>
                <Text style={styles.pra}>製品紹介</Text>
                <Text style={styles.cont}>
                  お客様の業務効率を改善します。膨大な事務処理を一手に担うツール[
                  sales v
                  ]です。従来製品とは違い、直感的に入力ができます。わかりやすいシステム設計で誰でも扱うことができます。
                </Text>
              </View>
              <View style={styles.border}></View>
              <View style={styles.pro}>
                <Text style={styles.pra}>特徴</Text>
                <View style={styles.cont}>
                  <Text style={{ color: "#707070" }}>
                    ・ 誰にでも扱いやすいツール
                  </Text>
                  <Text style={{ color: "#707070", marginTop: 10 }}>
                    ・ 直感的に操作できる
                  </Text>
                  <Text style={{ color: "#707070", marginTop: 10 }}>
                    ・約1000万人の顧客を管理できる
                  </Text>
                </View>
              </View>
              <View style={styles.border}></View>
              <View style={styles.pro}>
                <Text style={styles.pra}>価格</Text>
                <Text style={styles.fee_det}>
                  導入コスト100万円、ランニングコスト月2万、その他オプション料あり
                </Text>
              </View>
              <View style={styles.border}></View>
              <View style={styles.pro}>
                <Text style={styles.pra}>希望するセールス先</Text>
                <Text style={styles.fee_det}>各種営業会社</Text>
              </View>
              <View style={styles.border}></View>
              <View style={styles.pro}>
                <Text style={styles.pra}>対象エリア</Text>
                <Text style={styles.fee_det}>
                  全国（ただし訪問支援は福岡市内に限る。）
                </Text>
              </View>
              <View style={styles.border}></View>
              <View style={styles.pro}>
                <Text style={styles.pra}>報酬支払い条件</Text>
                <Text style={styles.fee_det}>
                  約定に至った場合に、月々4000円をお支払いいたします。ただし、解約された場合には、翌月からはお支払いがありません。
                </Text>
              </View>
              <View style={styles.border}></View>
              <View style={styles.pro}>
                <Text style={styles.pra}>約定率</Text>
                <Text style={styles.fee_det}>43.1%</Text>
              </View>
            </View>

            <TouchableHighlight
              onPress={() => console.log("pushed")}
              underlayColor={"rgba(96, 195, 255,0)"} // #角丸を設定した場合は、背景色を同じ色にしないとおかしく見える
              activeOpacity={0.7}
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 2,
                width: 300,
                marginTop: 50,
                marginBottom: 100
              }}
            >
              <LinearGradient
                colors={["rgba(96, 195, 255,1)", "rgba(90, 123, 247,1)"]}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                // location={{30%}}
                style={{
                  // backgroundColor: "blue",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  height: 50
                }}
              >
                <Text style={{ color: "#FFF" }}>販売申請</Text>
              </LinearGradient>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Detail;

const styles = StyleSheet.create({
  hole: {
    alignItems: "center"
  },
  sub_hole: {
    width: 360,
    backgroundColor: "snow"
  },
  pict: {
    width: 300,
    borderRadius: 15,
    height: 200
  },
  first: {
    marginTop: 20
  },
  second: {
    margin: 35,
    alignItems: "center"
  },
  fee: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#707070",

    margin: 30,
    width: 300,
    height: 140
  },
  fee_tp: {
    borderBottomColor: "#707070",
    borderBottomWidth: 1,
    width: 299
  },
  fee_text: {
    textAlign: "center",
    margin: 9,
    fontSize: 16,
    letterSpacing: 2,
    color: "#707070"
  },
  cercle: {
    borderWidth: 0.5,
    borderColor: "#707070",
    width: 55,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 16
  },
  pro: {
    marginTop: 30,
    marginBottom: 30,
    width: 360
  },
  pra: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#707070"
  },
  cont: {
    color: "#707070",
    marginTop: 15
  },
  border: {
    borderWidth: 0.3,
    // borderRadius: 0.5,
    borderStyle: "dashed"
    // borderBottomColor: "black"
  },
  fee_det: {
    color: "#707070",
    marginTop: 15,
    marginLeft: 10,
    width: 330
  }
});
