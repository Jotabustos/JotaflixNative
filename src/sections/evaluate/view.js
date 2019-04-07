import React, { Component } from "react";
import { SafeAreaView, View, Button } from "react-native";

import { TextField } from "react-native-material-textfield";
import styles from "./styles";
import * as colors from '../../commons/colors'
import {Actions} from 'react-native-router-flux'

export default class view extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personal_review: "",
      personal_rank: ""
    };
  }

  _onPress = () => {
      Actions.pop();
  };

  render() {
      const { personal_review, personal_rank } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <TextField
            label="Review"
            value={personal_review}
            multiline
            onChangeText={personal_review =>
              this.setState({ personal_review })
            }
            {...textFieldStyles}
          />
          <TextField
            label="Rank"
            value={personal_rank}
            keyboardType={"number-pad"}
            onChangeText={personal_rank => this.setState({ personal_rank })}
            {...textFieldStyles}
          />
          <Button
            onPress={this._onPress}
            title="Evaluate"
            color={colors.navBar}
          />
        </View>
      </SafeAreaView>
    );
  }


}

const textFieldStyles = {
  tintColor: colors.black,
};
