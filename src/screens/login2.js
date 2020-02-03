import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import { Input, Button } from "react-native-elements";
// import { AppLoading, Font } from "expo";
// import { Asset } from "expo-asset";
// import fonts from "../fonts";
// import images from "../images";
import { LinearGradient } from "expo-linear-gradient";
import RNPickerSelect, { defaultStyles } from "react-native-picker-select";
// import firebase from "./firebase";
class Login2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keiken: null,
      sales: null,
      kind: null
    };
  }

  render() {
    const { navigate } = this.props.navigation;

    const placeholdersales = {
      label: "セールス先",
      value: null,
      color: "#9EA0A4"
    };
    const placeholderkeiken = {
      label: "営業経験",
      value: null,
      color: "#9EA0A4"
    };
    const placeholderkind = {
      label: "業種",
      value: null,
      color: "#9EA0A4"
    };
    return (
      <LinearGradient
        colors={["rgba(96, 195, 255,1)", "rgba(90, 123, 247,1)"]}
        start={{ x: 0.9, y: 0 }}
        end={{ x: 1, y: 1 }}
        // location={{30%}}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ alignItems: "center", flex: 1 }}>
            <View
              style={{
                alignItems: "center",
                flex: 5,
                justifyContent: "center"
              }}
            >
              <Text style={styles.title}>WORKOUT</Text>
            </View>

            <View
              style={{
                flex: 2.5,
                justifyContent: "center",
                position: "relative",
                bottom: 10
              }}
            >
              <Text style={{ color: "white", fontSize: 24 }}>
                ユーザー登録　2/2
              </Text>
            </View>

            <View style={{ width: 250, flex: 13 }}>
              <View style={{ flex: 8, position: "relative" }}>
                <View style={{ flex: 1 }}>
                  <TextInput
                    placeholder="勤務先"
                    placeholderTextColor="#D0D0D0"
                    // autoFocus="true"
                    style={styles.input}
                  />
                </View>

                <View
                  style={{
                    flex: 1,
                    // backgroundColor: "green",
                    justifyContent: "flex-end"
                  }}
                >
                  <RNPickerSelect
                    placeholder={placeholderkind}
                    style={pickerSelectStyles}
                    items={[
                      { label: "農業、林業", value: "agri" },
                      { label: "漁業", value: "gyo" },
                      { label: "鉱業、採石業、砂利採取業", value: "mining" },
                      { label: "建設業", value: "const" },
                      { label: "製造業", value: "manu" },
                      { label: "電気・ガス・熱供給・水道業", value: "elec" },
                      { label: "情報通信業", value: "info" },
                      { label: "運輸業、郵便業", value: "trans" },
                      { label: "卸売業、小売業", value: "retail" },
                      { label: "金融業、保険業", value: "finance" },
                      { label: "不動産業、物品賃貸業", value: "estate" },
                      {
                        label: "学術研究、専門・技術サービス業",
                        value: "academi"
                      },
                      { label: "宿泊業、飲食サービス業", value: "hotel" },
                      { label: "生活関連サービス業、娯楽業", value: "life" },
                      { label: "教育、学習支援業", value: "edu" },
                      { label: "医療、福祉", value: "medi" },
                      { label: "サービス事業", value: "ser" },
                      { label: "公務", value: "poli" }
                    ]}
                    onValueChange={value => {
                      this.setState({
                        kind: value
                      });
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    // backgroundColor: "green",
                    justifyContent: "flex-end"
                  }}
                >
                  <RNPickerSelect
                    placeholder={placeholderkeiken}
                    style={pickerSelectStyles}
                    items={[
                      { label: "1〜2年", value: "houzin" },
                      { label: "3〜5年", value: "kozin" },
                      { label: "5〜10年", value: "both" },
                      { label: "10〜20年", value: "houzin" },
                      { label: "20〜30年", value: "kozin" },
                      { label: "30年以上", value: "both" }
                    ]}
                    onValueChange={value => {
                      this.setState({
                        keiken: value
                      });
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    // backgroundColor: "green",
                    justifyContent: "flex-end"
                  }}
                >
                  <RNPickerSelect
                    placeholder={placeholdersales}
                    style={pickerSelectStyles}
                    items={[
                      { label: "法人", value: "houzin" },
                      { label: "個人", value: "kozin" },
                      { label: "法人・個人", value: "both" }
                    ]}
                    onValueChange={value => {
                      this.setState({
                        sales: value
                      });
                    }}
                  />
                </View>
              </View>

              <View
                style={{
                  flex: 5,
                  justifyContent: "center"
                }}
              >
                <Button
                  title="complete"
                  titleStyle={{ color: "rgba(90, 123, 247,1)" }}
                  buttonStyle={{ height: 50, backgroundColor: "white" }}
                  onPress={() => navigate("Main")}
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
export default Login2;

const styles = StyleSheet.create({
  title: {
    color: "white",
    alignItems: "center",
    fontSize: 45,
    fontWeight: "900",
    fontFamily: "Avenir"
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    flex: 1,
    paddingTop: 40
  },
  bir: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    flex: 1
  },
  inptop: {
    paddingTop: 30
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    paddingBottom: 8,
    // paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    color: "white"
  },
  inputAndroid: {
    paddingBottom: 8,
    // paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    color: "white"
  }
});
