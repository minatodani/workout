import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  ImageStore,
  TouchableOpacity
} from "react-native";
import { Input, Button } from "react-native-elements";
import { AppLoading, Font } from "expo";
import { Asset } from "expo-asset";
import fonts from "./src/fonts";
import images from "./src/images";
import { LinearGradient } from "expo-linear-gradient";
import firebase from "firebase";
// import config from "./config/firebase";
// import List from "./list";
import PropTypes from "prop-types";

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
firebase.initializeApp(config);
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memoList: []
      // solid: <Text>{this.state.memoList}</Text>
    };
    // this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    const db = firebase.firestore();
    // db.settings({ timestampsInSnapshots: true });
    // const { currentUser } = firebase.auth();
    db.collection("company_info").onSnapshot(snapshot => {
      // snapshot.forEach(doc => {

      const i = 0;
      snapshot.forEach(doc => {
        const memoList = [];
        // const solid = [];
        // this.setState({ memoList });
        // const items = snapshot.docs.map(doc => doc.data());
        let data = doc.data();
        let abc = Object.entries(data);
        console.log(abc);
        let i = 0;
        this.state.memoList.push(i);
        this.setState({ memoList: this.state.memoList });
        console.log(this.state.memoList);

        // console.log(abc);
        abc.forEach(
          value => {
            // console.log(abc[i]);
            console.log(value);
            let ggg = value[1];
            console.log(ggg);
            this.state.memoList.push(ggg);
            this.setState({ memoList: this.state.memoList });
            console.log(this.state.memoList);
            // console.log(this.state.memoList);

            // console.log(ggg);
            // console.log(this.state.memoList);
          }
          // console.log(ggg[1]);
          // for (let r = 0; r < ggg.length; r++) {
          //   console.log(ggg[i]);
          // }
        );
        i = i + 1;
        // this.state.solid.push(<Text>{this.state.memoList}</Text>);
        // console.log(this.state.solid);
        // this.setState({ solid: this.state.solid });

        // memoList.push(abc);
        // console.log(memoList);
        // snapshot.forEach(nnn => {
        //   // const items = snapshot.docs.map(doc => doc.data());
        //   let sss = nnn.data();
        //   let aaa = Object.entries(sss);
        //   memoList.push(aaa);
        //   console.log(memoList);
        // console.log(this.state.memoList);

        // list = () => {
        //   return <Text>{this.state.memoList}</Text>;
        // };
      });
    });
  }
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>{this.state.solid}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
export default App;
