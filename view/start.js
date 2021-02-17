import React, {Component} from 'react'
import {View, StyleSheet, Text, Alert} from 'react-native'
import MainButton from './comp/mainButton'
import HelpButton from "./comp/helpButton"
import FeedbackButton from "./comp/feedbackButton"
import InputWindow from './comp/inputWindow'
import GetServer from "./server/GetServer";

class Start extends Component {
  static navigationOptions = {
      headerShown: false,
  }
  constructor() {
    super()
    this.state = {
      inputTextId: '',
      color: 'black',
    }
   }

  inputChange = (inputTextId) => {
    this.setState({inputTextId})
  }

  joinPage = () => {
    this.props.navigation.navigate('JoinPage')
  }

  checkId = async () => {
    const { inputTextId } = this.state;

    try {
      // {status, result: {compSeq: 1, compName = 'OSD'}}
      // {status, compSeq: 1, compName = 'OSD'}
      // const { status, result } = await GetServer("/company/check",{name:inputTextId});
      const response = await GetServer("/company/check",{name:inputTextId});
      if (response.status === 200){
        const result = await response.json();   // 나중에 GetServer 안으로 모듈화
        this.props.navigation.navigate('Login',{
          companySeq: result.compSeq  // 사용하지 않아서 밑줄 뜸
        })
      }
      else{
        Alert.alert(
          "알림",
          "업체를 찾을 수 없습니다.",
          [{text:"확인"}],
          { cancelable: false });
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const {inputTextId} = this.state;
    let inputText = '업체명';
    return(
      <View style={css.login}>
        <Text style={css.loginText}>
          로그인
        </Text>
        <InputWindow
          basicText={inputText}
          value={inputTextId}  // state의 inputTextId를 InputWindow 컴포넌트에 props로 전달
          onChangeText={(text) => this.inputChange(text)}  //inputChange를 prop으로 InputWindow 컴포넌트에 전달
          onSubmitEditing={this.checkId}
        />
        <MainButton
          text={"로그인"}
          checkId={this.checkId}
          color={inputTextId ? 'blue' : 'gray'}
        />
        <HelpButton
          text1={"계정이 없으신가요?"}
          text2={"회원가입"}
          nextPage={this.joinPage}
        />
        <View style={css.feedButtons}>
          <FeedbackButton
            text={"FAQ"}
            image={require('../src/common/img/account/faq.png')}
            url={"http://www.google.com"}
          />
        </View>
        <View style={css.feedButtons}>
          <FeedbackButton
            text={"문의하기"}
            image={require('../src/common/img/account/contact_us.png')}
            url={'http://www.naver.com'}
          />
        </View>
      </View>
    )
  }
}

const css = StyleSheet.create({
  login : {
    marginTop: 80
  },
  loginText : {
    marginLeft: 20,
    textAlign: 'left',
    fontSize: 50,
    color: 'darkgrey',
    fontWeight:'bold',
  },
  feedButtons: {
    flexDirection:'column',
    marginTop: -30
  }
})
export default Start;
