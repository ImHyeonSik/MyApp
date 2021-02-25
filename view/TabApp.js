import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./HomeScreen";
import SettingScreen from "./setting/SettingScreen";
import Food from "./food";
import Country from "./SignUp/Country";
import UserProfile from "./setting/UserProfile";


const HomeTabNavigator = createStackNavigator(
  {
    TabStackHome : HomeScreen,
    FoodPage: Food,
  }
);

const SettingTabNavigator = createStackNavigator(
  {
    TabStackSetting : SettingScreen,
    TabProfilePage: UserProfile,
    TabCountryPage: Country,
  }
);

const Tab = createBottomTabNavigator (
  {
    TabHome : HomeTabNavigator,
    SettingPage: SettingTabNavigator,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarLabel: ' ',
        tabBarIcon: ({ focused, horizontal,}) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'TabHome') {
            iconName = focused
              ? require('../src/common/img/navigation/home_on.png')
              : require('../src/common/img/navigation/home_off.png')
          } else if (routeName === 'SettingPage') {
            iconName = focused ? require('../src/common/img/navigation/setting_on.png') : require('../src/common/img/navigation/setting_off.png');
          }
          return <Image source={iconName} style={{width:30, height: 30, marginTop: 40}}/>;
        }
    }
    )}
);
export default Tab;
