
import React, { Component } from "react";
import firebase from "firebase";
import "firebase/storage";
import { View } from "react-native";

class List extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: []
  //   };
  //   this.getFireData();
  // }

  // // Firebaseからのデータ取得
  // getFireData() {
  //   let db = firebase.database();
  //   let ref = db.ref("company_info/");
  //   let self = this;
  //   ref
  //     .orderByKey()
  //     //   .limitToFirst(10)
  //     .on("value", snapshot => {
  //       self.setState({
  //         data: snapshot.val()
  //       });
  //     });
  // }

  // // データ表示の生成
  // getTableData() {
  //   let result = [];
  //   if (this.state.data == null || this.state.data.length == 0) {
  //     return [
  //       <View key="0">
  //         <Text>NO DATA</Text>
  //       </View>
  //     ];
  //   }
  //   for (let i in this.state.data) {
  //     result.push(
  //       <View key={i}>
  //         <Text>{this.state.data[i].area}</Text>
  //         <Text>{this.state.data[i].company}</Text>
  //         <Text>{this.state.data[i].fee}</Text>
  //       </View>
  //     );
  //   }
  //   return result;
  // }

  // render() {
  //   if (this.state.data.length == 0) {
  //     this.getFireData();
  //   }
  //   return (
  //     <View>
  //       <View>{this.getTableData()}</View>
  //     </View>
  //   );
  // }
  render() {
    const ref = firebase.database().ref('users/fwDRY...G3'),
    const name = ref.get({ firstname: 'firstname' }),
    return (
     
      <Text>{ name.firstname }</Text>
    )
  
}

export default List;

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
// import config from "./config/firebase";
// import List from "./list";

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
  state = {
    memoList: []
  };
  constructor(props) {
    super(props);
    // this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    const db = firebase.firestore();
    // db.settings({ timestampsInSnapshots: true });
    // const { currentUser } = firebase.auth();
    db.collection("company_info").onSnapshot(snapshot => {
      // snapshot.forEach(doc => {
      const memoList = [];
      snapshot.forEach(doc => {
        memoList.push(doc.area, doc.comapany, doc.fee);
      });
      this.setState({ memoList });
    });
  }

  render() {
    return (
      <SafeAreaView>
        <View>
          {/* <Text>{this.state.memoList[0][0]}</Text> */}
          {this.state.memoList.map(data => {
            return <Text key={data}>{data}</Text>;
          })}
        </View>
      </SafeAreaView>
    );
  }
}
export default App;
