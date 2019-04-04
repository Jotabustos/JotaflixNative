import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Stack, Router, Scene, Actions } from "react-native-router-flux";
import { Upcoming } from "./sections";
import { configureAxios } from "./webservices";
import { Provider } from "react-redux";
import { store } from "./config/redux";
import * as colors from "./commons/colors";

export default class App extends Component {
  constructor(props) {
    super(props);
    configureAxios();
    StatusBar.setBarStyle("light-content", true);
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key={"root"}>
            <Scene
              key={"Upcoming"}
              hideNavBar
              component={Upcoming}
              {...navBarStyles}
              initial
            />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

const navBarStyles = {
  navigationBarStyle: { backgroundColor: colors.navBar },
  titleStyle: { color: colors.white },
  backButtonTextStyle: { color: colors.white },
  backButtonTintColor: colors.white
};
