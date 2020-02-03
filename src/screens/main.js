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

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memoList: []
      // solid: <Text>{this.state.memoList}</Text>
    };

    // this.com
    // ponentWillMount = this.componentWillMount.bind(this);
  }

  componentDidMount() {
    console.disableYellowBox;
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>please wait</Text>
      </View>
    );
  }

  componentWillMount() {
    console.info(this.props);
    const db = firebase.firestore();
    // db.settings({ timestampsInSnapshots: true });
    // const { currentUser } = firebase.auth();
    db.collection("company_info").onSnapshot(snapshot => {
      // snapshot.forEach(doc => {

      snapshot.forEach(doc => {
        const { navigate } = this.props.navigation;

        const memoList = [];
        // const solid = [];
        // this.setState({ memoList });
        // const items = snapshot.docs.map(doc => doc.data());
        let data = doc.data();
        let abc = Object.entries(data);
        console.log(abc);
        console.log(abc[0]);
        console.log(abc[8][1]);
        const link = abc[6][1];
        this.state.memoList.push(
          <TouchableHighlight
            key={abc}
            onPress={() => navigate("Detail")}
            underlayColor={"rgba(96, 195, 255,0)"} // #角丸を設定した場合は、背景色を同じ色にしないとおかしく見える
            activeOpacity={0.7}
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 2, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 2,
              marginTop: 10
            }}
          >
            <View style={styles.hole}>
              <View style={styles.left}>
                <View style={{ flex: 1, marginTop: 17, marginLeft: 15 }}>
                  <Image
                    source={{ uri: abc[6][1] }}
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
                    {abc[8][1]}
                  </Text>
                </View>
                <View>
                  <Text style={{ color: "#707070", height: 75, width: 240 }}>
                    {abc[5][1]}
                  </Text>
                </View>
                <View style={styles.cercle}>
                  <Text style={{ margin: 3, color: "#707070", fontSize: 11 }}>
                    {abc[3][1]}
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
                    {abc[1][1]}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableHighlight>
        );

        this.setState({
          memoList: this.state.memoList
        });
        // const { navigate } = this.props.navigation;

        // console.log(this.state.memoList);

        // console.log(abc);
        // abc.forEach(
        //   value => {
        //     // console.log(abc[i]);
        //     console.log(value);
        //     let ggg = value[1];
        //     console.log(ggg);
        //     this.state.memoList.push(ggg);
        //     this.setState({ memoList: this.state.memoList });
        //     console.log(this.state.memoList);
        //     // console.log(this.state.memoList);

        //     // console.log(ggg);
        //     // console.log(this.state.memoList);
        //   }
        // console.log(ggg[1]);
        // for (let r = 0; r < ggg.length; r++) {
        //   console.log(ggg[i]);
        // }
      });
    });

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
  }

  render() {
    console.info(this.props);
    var Cards = [];
    for (let i = 0; i < this.state.memoList.length; i++) {
      Cards.push(this.state.memoList[i]);
    }
    console.log(Cards);

    return (
      <Fragment>
        <SafeAreaView style={{ flex: 0, backgroundColor: "#0097e6" }} />
        <SafeAreaView style={{ flex: 1, backgroundColor: "#dcdde1" }}>
          <View
            style={{
              height: 80,
              backgroundColor: "#0097e6"
            }}
          >
            <Text
              style={{
                fontFamily: "Avenir",
                marginTop: 30,
                fontSize: 24,
                fontWeight: "500",
                textAlign: "center",
                color: "white"
              }}
            >
              WORK OUT
            </Text>
          </View>
          <ScrollView style={{ backgroundColor: "#dcdde1" }}>
            {Cards}
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  hole: {
    flexDirection: "row",
    height: 190,
    borderColor: "#707070",
    borderWidth: 0.3,
    marginBottom: 10,
    backgroundColor: "snow"

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
