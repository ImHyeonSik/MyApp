import React, {Component} from 'react'
import {View, StyleSheet, Text, Alert} from 'react-native'
import MainButton from './comp/mainButton'
import HelpButton from "./comp/helpButton"
import FeedbackButton from "./comp/feedbackButton"
import InputWindow from './comp/inputWindow'

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

  checkId = () => {
    fetch(`http://141.223.149.91:8381/company/check?name=${this.state.inputTextId}`)
      .then(response => {
        if (response.status === 200){
          this.props.navigation.navigate('Login')
        }
        else{
          Alert.alert(
            "알림",
            "업체를 찾을 수 없습니다.",
            [{text:"확인"}],
            { cancelable: false });
        }
      })
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
          value={this.state.inputTextId}  // state의 inputTextId를 InputWindow 컴포넌트에 props로 전달
          onChangeText={(text) => this.inputChange(text)}  //inputChange를 prop으로 InputWindow 컴포넌트에 전달
        />
        <MainButton
          text={"로그인"}
          checkId={this.checkId}
          color={inputTextId ? 'blue' : 'gray'}
        />
        <HelpButton
          text1={"계정이 없으신가요?"}
          text2={"회원가입"}
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

