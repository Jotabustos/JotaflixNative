import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput
} from "react-native";
import styles from "./styles";

export default class view extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personal_review: "",
      personal_rank: ""
    };
  }

  _onSubmit = () => {
    console.log("as");
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          <TextInput
            label={"Review"}
            value={this.state.personal_review}
            onChangeText={text => this.setState({ personal_review: text })}
            placeholder={"Review"}
          />

          <TextInput
            label={"Rank:"}
            value={this.state.personal_rank}
            onChangeText={personal_rank => this.setState({ personal_rank })}
            keyboardType={"number-pad"}
            placeholder={"0"}
          />
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
        </View>
      </SafeAreaView>
    );
  }
}
