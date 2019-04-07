import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./style";

class view extends Component {

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={console.log("evaluateeee")}
      >
       <Text>Evaluate</Text>
      </TouchableOpacity>
    );
  }
}

export default view;
