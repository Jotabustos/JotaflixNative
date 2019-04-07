import React, { Component } from "react";
import { SafeAreaView, View, Button } from "react-native";

import { TextField } from "react-native-material-textfield";
import styles from "./styles";
import * as colors from "../../commons/colors";
import { Actions } from "react-native-router-flux";
import AsyncStorage from "@react-native-community/async-storage";

export default class view extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personal_review: "",
      personal_rank: ""
    };
  }

  componentDidMount() {
    this._getUserEvaluation();
  }

  _getUserEvaluation = async () => {
    try {
      const movieId = `${this.props.movie.id}`;
      const itemStored = (await AsyncStorage.getItem(movieId)) || {
        personal_review: "",
        personal_rank: ""
      };
      const newState = JSON.parse(itemStored);
      this.setState({
        personal_review: newState.personal_review,
        personal_rank: newState.personal_rank
      });
    } catch (err) {
      // Not reviewed yet
    }
  };

  _onPress = () => {
    this._storeData();
    Actions.pop();
  };

  _storeData = async () => {
    const data = JSON.stringify(this.state);
    const movieId = `${this.props.movie.id}`;
    try {
      await AsyncStorage.setItem(movieId, data);
    } catch (e) {
      // saving error
    }
  };

  render() {
    const { personal_review, personal_rank } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.view}>
          <TextField
            label="Ranking"
            value={personal_rank}
            keyboardType={"number-pad"}
            onChangeText={personal_rank => this.setState({ personal_rank })}
            {...textFieldStyles}
          />
          <TextField
            label="Review"
            value={personal_review}
            multiline
            onChangeText={personal_review =>
              this.setState({ personal_review })
            }
            {...textFieldStyles}
          />
          <Button
            onPress={this._onPress}
            title="Confirm"
            color={colors.red}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const textFieldStyles = {
  tintColor: colors.red,
  baseColor: colors.white,
  textColor: colors.white
};
