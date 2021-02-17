import React, {Component} from 'react'
import { View, Text, StyleSheet, Alert, ScrollView, TextInput, TouchableHighlight } from "react-native";
import InputWindow from "../comp/inputWindow";
import MainButton from "../comp/mainButton";
import DifferentButton from "../comp/DifferentButton";
import ProgressIcon from "../comp/ProgressIcon";

class MakeId extends Component {
  static navigationOptions = {
    headerTitle: () => false,
    headerBackground: () => ( <View/> ),
  }
  constructor() {
    super();
    this.state = {
      userID: '',
      idPassword: '',
      passwordCheck: '',
      IdCheck: false,
    }
  }

  IdChange = (userID) => {
    this.setState({userID})
  }

  PassChange = (idPassword) => {
    this.setState({idPassword})
  }

  PassCheckChange = (passwordCheck) => {
    this.setState({passwordCheck})
  }

  isJobPassword(asValue) {
    let regExp = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/;
    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
  }

  isJobId(asValue) {
    let regExp =/^[A-Za-z0-9]{6,40}$/;  //특수 기호 빠
    return regExp.test(asValue);
  }

  DuplicateCheck = () => {
    if(this.state.userID !== 'sik123' && this.isJobId(this.state.userID)){
      Alert.alert(
        "알림",
        "사용 가능한 ID 입니다.",
        [{text:"확인"}],
        { cancelable: false })
       this.setState({ IdCheck: true});
    }
    else{
      Alert.alert(
        "알림",
        "ID는 대*소문자 영문,숫자,특수기호(-_@.+)중 최소 1가지 이상을 포함하여 6~40자여야 합니다.",
        [{text:"확인"}],
        { cancelable: false })
       this.setState({ IdCheck: false});
    }
  }

  EqualPassword = () => {
    if((this.state.idPassword !== this.state.passwordCheck) || (this.state.idPassword === '')){
      return false
    }
    else if ( this.isJobPassword(this.state.idPassword) && (this.state.idPassword === this.state.passwordCheck) ) {
      return true
    }
  }

  checkWord = () => {
    if(this.isJobPassword(this.state.idPassword) || (this.state.idPassword ===  '')){
      return 'dimgray'
    }
    else
      return 'red'
  }

  RecheckWord = () => {
    if((this.state.idPassword === this.state.passwordCheck) || (this.state.passwordCheck ===  '')){
      return 'dimgray'
    }
    else
      return 'red'
  }

  NextUserInfo = () => {
    this.props.navigation.navigate('UserInfoPage')
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={css.joinContainer}>
          <Text style={css.mainText}>회원가입</Text>
          <ProgressIcon
            step={1}
            maximum={4}
          />
        </View>
        <ScrollView style={{flex:1}}>
          <Text style={{paddingLeft:40}}>ID 와 비밀번호를 입력해 주세요.</Text>
          <View style={{marginTop:15}}>
            <View style={css.userIdCheck}>
              <TextInput
                style={css.userInput}
                placeholder="사용자 ID"
                placeholderTextColor='#CACACA'
                selectionColor='#666666'
                value={this.state.userId}
                onChangeText={this.IdChange}
              />
              <TouchableHighlight
                style={css.DuplicateStyle}
                onPress={this.DuplicateCheck}>
                <Text style={css.DuplicateButton}>중복체크</Text>
              </TouchableHighlight>
            </View>
            <InputWindow
              basicText={"비밀번호"}
              value={this.state.idPassword}
              onChangeText={(text) => this.PassChange(text)}
              secureTextEntry={true}
            />
            <Text style={[css.ConditionText, {color: this.checkWord()}]}>조건에 맞지 않습니다.</Text>
            <InputWindow
              basicText={"비밀번호 확인"}
              value={this.state.passwordCheck}
              onChangeText={(text) => this.PassCheckChange(text)}
              secureTextEntry={true}
            />
            <Text style={[css.ConditionText, {color: this.RecheckWord()}]}>비밀번호 확인이 일치하지 않습니다.</Text>
          </View>
          <View>
            <MainButton
              text={"다음"}
              checkId={this.NextUserInfo}
              color={(this.EqualPassword() && this.state.IdCheck)? 'blue' : 'grey' }
            />
            <DifferentButton
              text={"구글로 회원가입"}
              image={require('../../src/common/img/account/sns_google.png')}
              url={'http://www.google.com'}
            />
            <DifferentButton
              text={"네이버로 회원가입"}
              image={require('../../src/common/img/account/sns_naver.png')}
              url={'http://www.naver.com'}
            />
          </View>
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
  userIdCheck:{
    marginLeft: 60,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  userInput:{
    height: 50,
    width: 170,
    backgroundColor: '#ffffff',
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 10
  },
  DuplicateStyle:{
    height: 50,
    width: 100,
    backgroundColor: 'lightskyblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  DuplicateButton:{
    color: '#ffffff',
    fontSize: 20
  },
  ConditionText:{
    paddingLeft: 60,
  }

})
export default MakeId
