import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableHighlight, ScrollView, Alert } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import MainButton from "../comp/mainButton";
import Icon from "react-native-vector-icons/Ionicons";

class SignUpLast extends Component {
  constructor() {
    super();
    this.state = {
      toggleCheckBox: ""
    }
  }

  static navigationOptions = {
    headerTitle: () => false,
    headerBackground: () => ( <View/> ),
  }

  setToggleCheckBox = (toggleCheckBox) => {
    this.setState({toggleCheckBox})
  }

  completebtn = () => {
    Alert.alert(
      "알림",
      "회원가입이 되었습니다.",
      [{ text: "확인" }],
      { cancelable: false });
  }

  render() {
    const { setToggleCheckBox } = this ;
    const { toggleCheckBox } = this.state ;
    return (
      <View style={{flex:1}}>
        <View style={css.joinContainer}>
          <Text style={css.mainText}>회원가입</Text>
          <View style={css.iconContainer}>
            <Icon name="radio-button-on-outline" color="skyblue"/>
            <Icon name="radio-button-on-outline" color="skyblue"/>
            <Icon name="radio-button-on-outline" color="skyblue"/>
            <Icon name="radio-button-on-outline" color="skyblue"/>
            <Icon name="radio-button-on-outline" color="skyblue"/>
          </View>
        </View>
        <ScrollView style={{flex:1}}>
          <Text style={{paddingLeft:40}}>마지막 단계입니다. {"\n"}이용약관 및 개인정보보호정책을 동의해주세요.</Text>
          <View style={css.checkboxContainer}>
            <CheckBox
              value={toggleCheckBox}
              onValueChange={(Value) => setToggleCheckBox(Value)}
              style={css.checkbox1}
              boxType={"square"}
            />
            <Text style={{fontSize: 15, paddingLeft: 5}}>이용약관, 개인정보 처리방침에 동의합니다.{"\n"}
            <Text style={{color: 'red'} }>이용약관 </Text>&<Text style={{color: 'red'}}> 개인정보보호정책</Text>
            </Text>
          </View>
          <MainButton
            text={"완료"}
            checkId={this.completebtn}
            color={this.state.toggleCheckBox ? 'blue' : 'gray'}
          />
        </ScrollView>
      </View>
    );
  }
}
const css = StyleSheet.create({
  joinContainer:{
    flex:0.2,
    marginTop: 20,
    paddingLeft: 40
  },
  iconContainer:{
    marginTop: 50,
    marginLeft: 70,
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  mainText:{
    fontSize:40,
    fontWeight: 'bold'
  },
  checkbox1:{
    marginLeft: 40,
    width: 18,
    height: 18
  },
  checkboxContainer: {
    marginTop: 30,
    flexDirection: "row"
  }
})
export default SignUpLast
