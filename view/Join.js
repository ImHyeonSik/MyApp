import React, {Component} from 'react'
import { View, Text, StyleSheet, Alert } from "react-native";
import InputWindow from "./comp/inputWindow";
import MainButton from "./comp/mainButton";
import Icon from "react-native-vector-icons/Ionicons";

class Join extends Component {
  static navigationOptions = {
    headerTitle: () => false,
    headerBackground: () => ( <View/> ),
  }
  constructor() {
    super();
    this.state = {
      inputText:'',
    }
  }

  inputChange = (inputText) => {
    this.setState({inputText})
  }

  checkId = () => {
    if(this.state.inputText === 'OSD'){
      this.props.navigation.navigate('MakePage')
    }
    else{
      Alert.alert(
        "알림",
        "업체를 찾을 수 없습니다.",
        [{text:"확인"}],
        { cancelable: false });
    }
  }

  render(){
    const {inputText} =this.state;
    return(
      <View style={{flex:1}}>
        <View style={css.joinContainer}>
          <Text style={css.mainText}>회원가입</Text>
          <View style={css.iconContainer}>
            <Icon name="radio-button-on-outline" color="skyblue"/>
            <Icon name="radio-button-off-outline" />
            <Icon name="radio-button-off-outline" />
            <Icon name="radio-button-off-outline" />
            <Icon name="radio-button-off-outline" />
          </View>
        </View>
        <View style={css.joinInputContainer}>
          <Text style={css.subText}>업체명을 입력해주세요.</Text>
          <InputWindow
            basicText={"업체명"}
            value={this.state.inputText}
            onChangeText={(text) => this.inputChange(text)}
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
export default Join
