import React, { Component } from "react";
import { View, Text, TouchableHighlight, StyleSheet, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import SettingMenu from "../comp/SettingMenu";
import GetServer from "../server/GetServer";

class SettingScreen extends Component {
  static navigationOptions = {
    headerTitle: () => false,
    headerLeft: (
      <View style={{marginLeft:20}}>
        <Text style={{fontSize:30}}>설정</Text>
      </View>
    )
  }

  constructor() {
    super();
    this.state = {
      name: '',
    }
  }

  componentDidMount = async () => {
    const r = await GetServer("member/dashboard")
    const result = await r.json();
    this.setState({name:result.profile.name})
  }

  render() {
    const { name } = this.state;
    return (
      <ScrollView>
          <TouchableHighlight onPress={() => {this.props.navigation.navigate('TabProfilePage')}}>
            <View style={css.profileContainer}>
              <Image style={{width:80,height:80, margin:10}} source={require('../../src/common/img/dog.jpg')} />
              <Text style={{fontSize:20, marginLeft:10}}>{name}</Text>
              <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end',}}>
                <Icon name="chevron-forward-outline" size={25} style={{color:'#20B2AA', margin:10}}/>
              </View>
            </View>
          </TouchableHighlight>

          <Text style={{fontSize:15, marginLeft:15, marginTop:20}}>설정</Text>
          <View style={css.settingContainer}>
            <SettingMenu
              titleText={"목표"}
            />
            <SettingMenu
              titleText={"단위"}
            />
            <SettingMenu
              titleText={"활동"}
            />
            <SettingMenu
              titleText={"언어"}
            />
            <SettingMenu
              titleText={"알람"}
            />
            <SettingMenu
              titleText={"버전"}
            />
          </View>

          <Text style={{fontSize:15, marginLeft:15, marginTop:20}}>기타</Text>
          <View style={css.settingContainer}>
            <SettingMenu
              titleText={"이용약관 & 개인정보 보호정책"}
            />
            <SettingMenu
              titleText={"고객센터"}
            />
            <SettingMenu
              titleText={"회원탈퇴"}
            />
          </View>

        <TouchableHighlight >
          <View style={css.logoutContainer}>
            <Text style={{color:'red', fontSize:20}}>로그아웃</Text>
          </View>
        </TouchableHighlight>

      </ScrollView>
    );
  }
}
const css = StyleSheet.create({
  profileContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#ffffff',
    borderRadius:10,
    margin: 15
  },
  settingContainer:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'#ffffff',
    borderRadius:10,
    margin: 15
  },
  logoutContainer:{
    flex:1,
    margin:20,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#ffffff',
    borderRadius:10
  }
})

export default SettingScreen;
