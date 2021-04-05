import React, { Component } from "react";
import { Router, Scene, Actions } from "react-native-router-flux";
import Drawer from 'react-native-drawer'

import login from "./../components/login";
import home from "./../components/home";
import profile from "./../components/profile"
import SideMenu from "./../components/sidebar"
//import FontAwesome, { Icons } from "react-native-fontawesome";
//import { Icon } from "react-native-elements";
import { white } from "./colors";

const iconPlus = () => {
  /*return (
    <Icon
      size={20}
      onPress={() => Actions.deckForm()}
      name="plus"
      type="font-awesome"
      raised={true}
    />
  );*/
};
const AppRouter = () => {
  return (
    <Router>
      <Scene key="root"  drawer contentComponent={SideMenu}  drawerPosition="left">
     
        <Scene
          initial
          key="login"
          component={login}
          headerPressColorAndroid={white}
          hideNavBar
        />
         <Scene
          key="home"
          component={home}
          headerPressColorAndroid={white}
          hideNavBar
       
        />
        <Scene
          key="profile"
          component={profile}
          headerPressColorAndroid={white}
          hideNavBar
        />
      </Scene>
    </Router>
  );
};

export default AppRouter;
