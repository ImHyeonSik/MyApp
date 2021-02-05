/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Start from "./view/start";
import UserSingIn from './view/UserSignIn';
import Find from "./view/Find";
import Join from "./view/Join";
import MakeId from "./view/MakeId";
import UserInfo from "./view/UserInfo";
import Country from "./view/Country";
import Camera from "./view/Camera";

const AppNavigator = createStackNavigator(
  {
    Home: Start,
    Login: UserSingIn,
    FindPass: Find,
    JoinPage: Join,
    MakePage: MakeId,
    UserInfoPage: UserInfo,
    CountryPage: Country,
    CameraPage: Camera
  },
  {
    initialRouteName: 'UserInfoPage',
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
