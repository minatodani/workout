import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import { Header } from "react-navigation-stack";
import { Input, Button } from "react-native-elements";
// import { AppLoading, Font } from "expo";
// import { Asset } from "expo-asset";
// import fonts from "../fonts";
// import images from "../images";
import { LinearGradient } from "expo-linear-gradient";
// import firebase from "firebase";
// import firebaseConfig from "./config/firebase";

// firebase.initializeApp(firebaseConfig);

class Login1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      udername: "",
      address: "",
      email: "",
      phone: "",
      year: "",
      month: "",
      day: "",
      password: ""
    };
  }

  // handleSignUp = () => {
  //   const {
  //     email,
  //     password,
  //     username,
  //     // address,
  //     // phone,
  //     // month,
  //     // day,
  //     year
  //   } = this.state;

  //   // firebaseでSignUp
  //   // firebase
  //   //   .auth()
  //   //   .createUserWithEmailAndPassword(email, password)
  //   //   .then(user => {
  //   //     this.setState({ username: "", email: "", password: "" });
  //   //     alert("success");
  //   //     // 登録後のページへ遷移させる
  //   //   })
  //   //   .catch(error => alert(error));
  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(function(user) {
  //       user
  //         .updateProfile({
  //           user: username
  //         })
  //         .then(
  //           function() {
  //             // Update successful.
  //             alert("success");
  //           },
  //           function(error) {
  //             // An error happened.
  //             alert(error);
  //           }
  //         );
  //     })
  //     .catch(function(error) {
  //       // Handle Errors here.
  //       alert(error);
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //     });
  // };

  render() {
    // const { navigate } = this.props.navigation;
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
                ユーザー登録　1/2
              </Text>
            </View>

            <View style={{ width: 250, flex: 13 }}>
              <KeyboardAvoidingView
                // behavior="padding"
                style={{ flex: 10 }}
              >
                <View style={{ flex: 1 }}>
                  <TextInput
                    placeholder="お名前"
                    placeholderTextColor="#D0D0D0"
                    // autoFocus="true"
                    style={styles.input}
                    onChangeText={username => this.setState({ username })}
                  />
                </View>

                <View style={{ flex: 1 }}>
                  <TextInput
                    placeholder="お住まい"
                    placeholderTextColor="#D0D0D0"
                    // autoFocus="true"
                    style={styles.input}
                    onChangeText={address => this.setState({ address })}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <TextInput
                    placeholder="メールアドレス"
                    placeholderTextColor="#D0D0D0"
                    style={styles.input}
                    onChangeText={email => this.setState({ email })}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <TextInput
                    placeholder="電話番号"
                    placeholderTextColor="#D0D0D0"
                    // autoFocus="true"
                    style={styles.input}
                    onChangeText={phone => this.setState({ phone })}
                  />
                </View>

                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: "row", flex: 1 }}>
                    <TextInput
                      placeholder="年"
                      keyboardType="numeric"
                      placeholderTextColor="#D0D0D0"
                      // autoFocus="true"
                      style={styles.bir}
                      onChangeText={year => this.setState({ year })}

                      // style={{ backgroundColor: "red" }}
                    />
                    <View style={{ flex: 1 }}></View>
                    <TextInput
                      placeholder="月"
                      keyboardType="numeric"
                      placeholderTextColor="#D0D0D0"
                      // autoFocus="true"
                      style={styles.bir}
                      onChangeText={month => this.setState({ month })}
                    />
                    <View style={{ flex: 1 }}></View>
                    <TextInput
                      placeholder="日"
                      keyboardType="numeric"
                      placeholderTextColor="#D0D0D0"
                      // autoFocus="true"
                      style={styles.bir}
                      onChangeText={day => this.setState({ day })}
                    />
                  </View>
                </View>
              </KeyboardAvoidingView>
              <View
                style={{
                  flex: 4,
                  justifyContent: "center",
                  paddingBottom: 30
                }}
              >
                <Button
                  title="next"
                  titleStyle={{ color: "rgba(90, 123, 247,1)" }}
                  buttonStyle={{ height: 50, backgroundColor: "white" }}
                  onPress={() => navigate("Login2")}
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
export default Login1;

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
    paddingTop: 35,
    color: "white"
  },
  bir: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    flex: 1,
    paddingTop: 35,
    color: "white"
  },
  inptop: {
    paddingTop: 30
  }
});
