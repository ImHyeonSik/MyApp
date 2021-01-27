import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet, Alert,
} from "react-native";
import InputWindow from "./comp/inputWindow";
import MainButton from "./comp/mainButton";

class Find extends Component{
  constructor(props) {
    super(props);
    this.state = {
      titleText: "ID & 비밀번호 찾기",
      bodyText: "ID를 잊어버린 경우 \n관리자에게 문의하세요.",
      bodyText2: "비밀번호를 잊어버린 경우 \nID 와 이메일 주소를 입력 후 비밀번호 찾기 \n버튼을 누르세요.",
      input1: "",
      input2: "",
    };
  }

  isEmail = (asValue)  => {
    let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
  }

  inputChangeID = (input1) => {
    this.setState({input1})
  }

  inputChangeEmail = (input2) => {
    this.setState({input2})
  }

  checkEmail = () => {
    if(this.isEmail(this.state.input2) || (this.state.input2 ===  '')){
        return 'dimgray'
    }
    else
       return 'red'
  }

  checkId = () => {
    if(this.state.input1 === 'OSD' && this.state.input2 === 'csaf@fskfk.com'){
      Alert.alert("pass");
    }
    else
      Alert.alert(
        "알림",
        "일치하는 정보가 없습니다.",
        [{text:"확인"}],
        { cancelable: false }
      );
  }
  render() {
    return (
      <View>
        <View style={css.findContainer}>
          <Text style={css.findTextHeader}>
            {this.state.titleText}{'\n'}
          </Text>
          <Text style={css.findSubText}>
            {this.state.bodyText}
          </Text>
        </View>
        <View style={css.lineView}>
          <Text style={css.findSubText}>
            {this.state.bodyText2}
          </Text>
          <InputWindow
            basicText={"ID"}
           value={this.state.input1}
           onChangeText={this.inputChangeID}
          />
          <InputWindow
            basicText={"등록한 이메일 주소"}
            value={this.state.input2}
            onChangeText={this.inputChangeEmail}
          />
          <Text style={[css.ruleText, {color: this.checkEmail()}]} >
            올바른 이메일을 사용하여 주세요.
          </Text>
          <MainButton
            text={"비밀번호 찾기"}
            checkId={this.checkId}
            color={(this.state.input1 && this.state.input2 && this.isEmail(this.state.input2)) ? 'blue' : 'gray'}
          />
        </View>
      </View>
    );
  }
}

const css = StyleSheet.create({
  findContainer:{
    borderBottomWidth: 2,
    borderBottomColor: '#ffffff',
    justifyContent: "space-around",
    marginTop: 150
  },
  lineView:{
    marginTop:30
  },
  findTextHeader:{
    fontSize: 40,
    marginLeft: 15
  },
  findSubText:{
    fontSize: 20,
    marginLeft: 15
  },
  ruleText: {
    marginLeft : 60,
    marginTop: 10,
  }
})
export default Find
