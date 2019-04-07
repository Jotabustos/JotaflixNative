import React, { Component } from "react";
import { StatusBar } from "react-native";
import { Stack, Router, Scene, Actions } from "react-native-router-flux";
import { Upcoming, Detail, Evaluate } from "./sections";
import { configureAxios } from "./webservices";
import { Provider } from "react-redux";
import { store } from "./config/redux";
import * as colors from "./commons/colors";
import _ from "lodash";

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
            <Scene
              key={"Detail"}
              component={Detail}
              {...navBarStyles}
              rightTitle={"Evaluate"}
              onRight={() =>
                Actions.push("Evaluate", {
                  title: "Evaluate",
                  movie: _.get(
                    store.getState(),
                    "upcoming.selectedMovie",
                    {}
                  )
                })
              }
              rightButtonTextStyle={{ color: colors.white }}
            />
            <Scene
              key={"Evaluate"}
              component={Evaluate}
              {...navBarStyles}
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
