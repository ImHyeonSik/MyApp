import React, {Component} from 'react'
import { View, StyleSheet, Image, Alert} from 'react-native'
import InputWindow from "./comp/inputWindow";
import MainButton from "./comp/mainButton";
import DifferentButton from "./comp/DifferentButton";
import HelpButton from "./comp/helpButton";
import FeedbackButton from "./comp/feedbackButton";
import BackButton from "./comp/BackButton";

class UserSingIn extends Component{
  constructor() {
    super();
    this.state= {
      userId: '',
      userPassword: ''
    }
  }

  inputChangeID = (userId) => {
    this.setState({userId})
  }

  inputChangePassWord = (userPassword) => {
    this.setState({userPassword})
  }

  checkId = () => {
    if((this.state.userId === 'user01') && (this.state.userPassword === '1111')){
      Alert.alert("pass User");
    }
    else{
      Alert.alert(
        "실패",
        "아이디 혹은 비밀번호를 확인하세요.",
        [{text:"확인"}],
        { cancelable: false }
      );
    }
  }

  nextPage = () => {
    this.props.navigation.navigate('FindPass')
  }

  render() {
    console.log('signIn', this.userId);
    return(
      <View>
        <BackButton />
        <View style={css.login2}>
          <Image style={css.loginMainImage} source={require('../src/common/img/account/profile.jpg')} />
          <View style={css.inputStyle}>
            <InputWindow
              basicText={"사용자 ID"}
              value = {this.userId}
              onChangeText={(text) => this.inputChangeID(text)}
            />
          </View>
          <View style={css.inputStyle}>
            <InputWindow
              basicText={"사용자 비밀번호"}
              value = {this.userPassword}
              onChangeText={(text) => this.inputChangePassWord(text)}
            />
          </View>
          <MainButton
            text={"로그인"}
            checkId={this.checkId}
            color={(this.state.userPassword && this.state.userId)? 'blue' : 'grey' }
          />
         <View style={css.DbuttonStyle}>
           <DifferentButton
             text={"구글로 로그인"}
             image={require('../src/common/img/account/sns_google.png')}
             url={'http://www.google.com'}
           />
         </View>
          <View style={css.DbuttonStyle}>
            <DifferentButton
              text={"네이버로 로그인"}
              image={require('../src/common/img/account/sns_naver.png')}
              url={'http://www.naver.com'}
            />
          </View>
          <HelpButton
            text1={"ID 나 비밀번호를 잊으셨나요?"}
            nextpage={this.nextPage}
          />
          <View style={css.feedView}>
            <FeedbackButton
              text={"문의하기"}
              image={require('../src/common/img/account/contact_us.png')}
              url={'http://www.onesoftdigm.com'}
            />
          </View>
        </View>
      </View>
    )
  }
}

const css = StyleSheet.create({
  login2:{
    marginTop: 80,
    alignItems: 'center',
  },
  loginMainImage: {
    height: 50,
    width: 50
  },
  differentButtonContainer:{
    flexDirection: 'row'
  },
  feedView:{
    marginRight : 230,
    marginBottom: 400
  },
  DbuttonStyle: {
    marginTop: -23,
  },
  inputStyle: {
    marginBottom: -10
  },
})
export default UserSingIn
