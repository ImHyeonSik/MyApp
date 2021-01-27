/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Text} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Start from "./view/start";
import UserSingIn from './view/UserSignIn';
import Find from "./view/Find";

const AppNavigator = createStackNavigator(
  {
    Home: Start,
    Login: UserSingIn,
    FindPass: Find
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
export default App;
