import React, {Component} from 'react'
import { View, Text, StyleSheet, Alert, ScrollView, TextInput, TouchableHighlight, StatusBar } from "react-native";
import InputWindow from "./comp/inputWindow";
import MainButton from "./comp/mainButton";
import Icon from "react-native-vector-icons/Ionicons";

class UserInfo extends Component {
  static navigationOptions = {
    headerTitle: () => false,
    headerBackground: () => ( <View/> ),
  }

  constructor() {
    super();
    this.state = {
      NickName: '',
      email: '',
      PhoneNumber: '',
      country: null,
      countryIndex: null,
    }
  }

  NickChange = (NickName) => {
    this.setState({NickName})
  }
  emailChange = (email) => {
    this.setState({email})
  }
  PhoneChange = (PhoneNumber) => {
    this.setState({PhoneNumber})
  }

  isEmail = (asValue)  => {
    let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(asValue);
  }
  isPhone = (asValue)  => {
    let regExp = /^[0-9]{1,20}$/;
    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
  }

  EmailText = () => {
    if(this.isEmail(this.state.email) || (this.state.email ===  '')){
      return '#808080'
    }
    else
      return '#FF0000'
  }

  PhoneText = () => {
    if(this.isPhone(this.state.PhoneNumber) || (this.state.PhoneNumber ===  '')){
      return '#808080'
    }
    else
      return '#FF0000'
  }

  RecheckWord = () => {
    if(this.state.passwordCheck ===  ''){
      return '#808080'
    }
    else
      return '#FF0000'
  }

  profileFunc = () => {
    Alert.alert(
      "사진 변경",
      "",
      [
        {text:"카메라", onPress: this.cameraFunc },
        {text:"갤러리 이미지"}
        ],
      { cancelable: false });
  }

  cameraFunc = () => {
    this.props.navigation.navigate('CameraPage')
  }

  render() {
    const {country, countryIndex} = this.state;
    return (
      <View style={{flex:1}}>
        <View style={css.joinContainer}>
          <Text style={css.mainText}>회원가입</Text>
          <View style={css.iconContainer}>
            <Icon name="radio-button-on-outline" color="skyblue"/>
            <Icon name="radio-button-on-outline" color="skyblue"/>
            <Icon name="radio-button-on-outline" color="skyblue"/>
            <Icon name="radio-button-off-outline" />
            <Icon name="radio-button-off-outline" />
          </View>
        </View>
        <ScrollView style={{flex:1}}>
          <Text style={{paddingLeft:40}}>별명은 필수 입력사합입니다. {"\n"}그 외의 부가 정보는 건너뛰고 나중에 입력할 수도 있습니다.</Text>
          <View>
            <InputWindow
              basicText = {"별명 *"}
              value = {this.state.NickName}
              onChangeText ={(text) => this.NickChange(text)}
            />
            <InputWindow
              basicText = {"이메일"}
              value = {this.state.email}
              onChangeText ={(text) => this.emailChange(text)}
            />
            <Text style={[css.ConditionText, {color: this.EmailText()}]}>올바른 이메일을 사용하여 주세요.</Text>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('CountryPage',
              {
                onSelectCountry: (country, countryIndex) => this.setState({country, countryIndex}),
                  country, countryIndex
              }
              )}>
              <View style={css.buttonStyle}>
                <Text style={css.buttonText1}>국가</Text>
                <Text style={css.buttonText1}>{country}</Text>
              </View>
            </TouchableHighlight>
            <InputWindow
              basicText = {"휴대폰"}
              value = {this.state.PhoneNumber}
              onChangeText ={(text) => this.PhoneChange(text)}
              type={"number"}
            />
            <Text style={[css.ConditionText, {color: this.PhoneText()}]}>숫자만 입력하세요.</Text>
            <TouchableHighlight onPress={this.profileFunc}>
              <View style={css.buttonStyle}>
                <Text style={css.buttonText1}>프로필</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={[{flexDirection:'row'},{justifyContent:'flex-end'}]}>
            <Text style={[{color:this.RecheckWord}]}>건너뛰기</Text>
            <Icon name="chevron-forward-outline" color={this.RecheckWord} />
          </View>
          <MainButton
            text={"다음"}
            checkId={this.RecheckWord}
            color={this.state.NickName ? 'blue' : 'gray'}
          />
        </ScrollView>
      </View>
    );
  }
}

const flags = (code = 'KR') => {
  const codeUp = code.toUpperCase();
  return `${String.fromCodePoint(codeUp.codePointAt(0) - 0x41 + 0x1F1E6)}${String.fromCodePoint(codeUp.codePointAt(1) - 0x41 + 0x1F1E6)}`
};

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
  ConditionText:{
    paddingLeft: 60,
  },
  buttonStyle:{
    marginLeft: 55,
    height: 50,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 10
  },
  buttonText1:{
    color: '#CACACA',
    paddingTop: 15
  },
})
export default UserInfo
