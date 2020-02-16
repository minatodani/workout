import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  TouchableHighlight
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
import firebase from "firebase";
// import firebase from "../../config/firebase";

require("firebase/firestore");

// firebase.initializeApp(firebaseConfig);

var config = {
  apiKey: "AIzaSyCCZzmYrULkiqLsUbplEWH78BqrEGMjc5A",
  authDomain: "workout-202011.firebaseapp.com",
  databaseURL: "https://workout-202011.firebaseio.com",
  projectId: "workout-202011",
  storageBucket: "workout-202011.appspot.com",
  messagingSenderId: "1089102552787",
  appId: "1:1089102552787:web:2d42d1d32b92c64f7c3e26",
  measurementId: "G-8FHFXPXHHN"
};
// firebase.initializeApp(config);
!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
// firebase.initializeApp(firebaseConfig);

// const signup = (email, password) => {
//   firebase
//     .auth()
//     .createUserWithEmailAndPassword(email, password)
//     .then(user => {
//       if (user) {
//         console.log("Success to Signup");
//       }
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   username: "",
      email: "",
      password: ""
    };
  }

  handleSignUp = () => {
    const {
      //   username,
      email,
      password

      // address,
      // phone,
      // month,
      // day,
    } = this.state;

    console.log(email);

    if (email == "") {
      alert("メールアドレスを入力してください。");
    } else if (password == "") {
      alert("パスワードを入力してください。");
    } else {
      const db = firebase.auth();
      const { navigate } = this.props.navigation;
      db.signInWithEmailAndPassword(email, password)
        .then(function() {
          alert("Welcome");
          const move = () => navigate("Main");
          setTimeout(move, 0);
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          alert("正しく入力されていません。");
          // ...
        });

      //   db.signInWithEmailAndPassword(email, password)
      //     .catch(function(error) {
      //       // Handle Errors here.
      //       alert("正しく入力されていません。");
      //       const move = () => navigate("Login");
      //       setTimeout(move, 0);
      //       // ...
      //     })
      //     .then(function() {
      //       alert("Welcome");
      //       const move = () => navigate("Main");
      //       setTimeout(move, 0);
      //     });
    }

    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then(function (user) {
    //     console.log("ok");
    //     // this.setState({ username: "", email: "", password: "" });
    //     alert("success");
    //     // 登録後のページへ遷移させる
    //   })
    //   .catch(function(error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // ...
    //   }); // firebaseでSignUp

    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then(user => {
    //     this.setState({ username: "", email: "", password: "" });
    //     alert("success");
    //     // 登録後のページへ遷移させる
    //   })
    //   .catch(error => alert(error));

    // .then(function(user) {
    //   () =>
    //     navigate("Main")
    //       // user
    //       //   .updateProfile({
    //       //     user: username
    //       //   })
    //       //  () => navigate("Main")
    //       .then(
    //         function() {
    //           // Update successful.
    //           console.log("ok");

    //           // alert("success");
    //         },
    //         function(error) {
    //           // An error happened.
    //           alert(error);
    //         }
    //       );
    // })
    // .catch(function(error) {
    //   // Handle Errors here.
    //   alert(error);
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    // });
  };

  render() {
    const { navigate } = this.props.navigation;
    // signUp = () => {
    //   const { email, password } = this.state;
    //   signup(email, password);
    // };

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
              <Text style={{ color: "white", fontSize: 24 }}>ログイン</Text>
            </View>

            <View style={{ width: 300, flex: 10 }}>
              <KeyboardAvoidingView
                // behavior="padding"
                style={{ flex: 6 }}
              >
                {/* <View style={{ flex: 1, backgroundColor: "green" }}></View> */}
                <View style={{ flex: 2 }}></View>
                {/* <View style={{ flex: 1, backgroundColor: "green" }}></View> */}
                <View style={{ flex: 2 }}>
                  <TextInput
                    placeholder="メールアドレス"
                    placeholderTextColor="#D0D0D0"
                    style={styles.input1}
                    onChangeText={email => this.setState({ email })}
                  />
                </View>
                <View style={{ flex: 2 }}></View>
                <View style={{ flex: 2 }}>
                  <TextInput
                    placeholder="パスワード"
                    placeholderTextColor="#D0D0D0"
                    style={styles.input2}
                    onChangeText={password => this.setState({ password })}
                  />
                </View>
                <View style={{ flex: 2 }}></View>
              </KeyboardAvoidingView>
              <View
                style={{
                  flex: 4,
                  alignItems: "center",
                  paddingBottom: 30
                  //   backgroundColor: "red"
                }}
              >
                <Button
                  title="next"
                  titleStyle={{ color: "rgba(90, 123, 247,1)" }}
                  buttonStyle={{
                    height: 50,
                    backgroundColor: "white",
                    width: 250,
                    marginTop: 50
                  }}
                  onPress={() => this.handleSignUp()}
                />
                <View style={{ height: 20 }}></View>
                <TouchableHighlight onPress={() => navigate("Demo")}>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: "white"
                    }}
                  >
                    <Text
                      style={{
                        borderBottomWidth: 1,
                        borderBottomColor: "white",
                        color: "white"
                      }}
                    >
                      新規ユーザーはこちら
                    </Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  title: {
    color: "white",
    alignItems: "center",
    fontSize: 45,
    fontWeight: "900",
    fontFamily: "Avenir"
  },
  input1: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    flex: 1,
    // paddingTop: 20,
    color: "white",
    // backgroundColor: "red",
    height: 50
  },
  input2: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    flex: 1,
    // paddingTop: 20,
    color: "white",
    // backgroundColor: "red",
    height: 50
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
