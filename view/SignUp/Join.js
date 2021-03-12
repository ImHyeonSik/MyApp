import React, {Component} from 'react'
import { View, Text, StyleSheet, Alert } from "react-native";
import InputWindow from "../comp/inputWindow";
import MainButton from "../comp/mainButton";
import ProgressIcon from "../comp/ProgressIcon";
import GetServer from "../server/GetServer";

import { connect } from "react-redux";

import * as action from '../../src/redux/action';

class Join extends Component {
  static navigationOptions = {
    headerTitle: () => false,
    headerBackground: () => ( <View/> ),
  }

  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    }
  }

  inputChange1 = (inputText) => {
    this.setState({inputText})
  }

  checkId = async () => {
    const {inputText} = this.state;   // const {inputText : name } = this.state
    const response = await GetServer("/company/check", {name:inputText});
    // const response = await GetServer("/company/check", {name, pw: "1111"});

    if (response.status === 200) {
      const result = await response.json();
      this.props.handleSetName(this.state.inputText,result.compSeq)
      this.props.navigation.navigate('MakePage')
    }
    else {
      Alert.alert(
        "알림",
        "업체를 찾을 수 없습니다.",
        [{ text: "확인" }],
        { cancelable: false });
    }
  }

  render(){
    const {inputText} = this.state;
    return(
      <View style={{flex:1}}>
        <View style={css.joinContainer}>
          <Text style={css.mainText}>회원가입</Text>
          <ProgressIcon
            step={0}
            maximum={4}
          />
        </View>
        <View style={css.joinInputContainer}>
          <Text style={css.subText}>업체명을 입력해주세요.</Text>
          <InputWindow
            basicText={"업체명"}
            value={this.state.inputText}
            onChangeText={(text) => this.inputChange1(text)}
          />
          <MainButton
            text={"다음"}
            checkId={this.checkId}
            color={inputText ? 'blue' : 'grey'}
          />
        </View>
      </View>
    );
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    handleSetName: (name, seq) => { dispatch(action.set_company(name, seq))},
  }
}

const css = StyleSheet.create({
  joinContainer:{
    marginTop: 20,
    marginLeft:40
  },
  joinInputContainer:{
    flex:1,
    marginTop:10,
  },
  mainText:{
    fontSize:40,
    fontWeight: 'bold'
  },
  subText:{
    paddingLeft: 40,
    paddingTop: 10
  },
  iconContainer:{
    marginTop: 50,
    marginLeft: 70,
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
})
export default connect(null, mapDispatchProps)(Join)
