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
import Join from "./view/SignUp/Join";
import MakeId from "./view/SignUp/MakeId";
import UserInfo from "./view/SignUp/UserInfo";
import Country from "./view/SignUp/Country";
import Camera from "./view/SignUp/Camera";
import SignUpLast from "./view/SignUp/SignUpLast";
import Tab from "./view/TabApp";
import OptionModal from "./view/comp/OptionModal";
import UserProfile from "./view/setting/UserProfile";

const AppNavigator = createStackNavigator(
  {
    Home: Start,
    Login: UserSingIn,
    FindPass: Find,
    JoinPage: Join,
    MakePage: MakeId,
    UserInfoPage: UserInfo,
    CountryPage: Country,
    CameraPage: Camera,
    SignUpLastPage: SignUpLast,
    TabPage: { screen: Tab, navigationOptions: { headerShown: false }},
    Ppap: OptionModal
  },
  {
    initialRouteName: 'TabPage',
  },
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
