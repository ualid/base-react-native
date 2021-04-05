import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, StatusBar } from "react-native";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { purple, white } from "./utils/colors";
import AppRouter from "./utils/routers";
import { getStatusBarHeight } from "react-native-status-bar-height";
import reducer from "./reducers/index";
import configStore from './utils/configStore'
import { PersistGate } from 'redux-persist/integration/react';

function StatusBarApp({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: getStatusBarHeight() }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}
export default class App extends Component {

  render() {
    const {store, persistor } = configStore();
    return (
      //createStore(reducer, applyMiddleware(thunk))
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={{ flex: 1 }}>
          <StatusBarApp backgroundColor={purple} barStyle="light-content" />
          <AppRouter />
        </View>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
