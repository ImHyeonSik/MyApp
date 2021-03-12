import React, {Component} from 'react'
import { View, Text, StyleSheet, Alert, ScrollView, TextInput, TouchableHighlight, Image } from "react-native";
import InputWindow from "../comp/inputWindow";
import MainButton from "../comp/mainButton";
import Icon from "react-native-vector-icons/Ionicons";
import ImagePicker from "react-native-image-crop-picker";
import ProgressIcon from "../comp/ProgressIcon";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import * as action from '../../src/redux/action';

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
      image: null,
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
    this.props.handleSetInfo(this.state.NickName, this.state.email, this.state.country, this.state.PhoneNumber, this.state.image)
    this.props.navigation.navigate('SignUpLastPage')
  }

  profileFunc = () => {
    Alert.alert(
      "사진 변경",
      "",
      [
        {text:"카메라", onPress: this.cameraFunc },
        {text:"갤러리 이미지", onPress: () => this.pickSingle(false) }
        ],
      { cancelable: false });
  }

  cameraFunc = () => {
    this.props.navigation.navigate('CameraPage')
  }

  pickSingle(cropit, circular = false, mediaType) {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: cropit,
      cropperCircleOverlay: circular,
      sortOrder: 'none',
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      compressImageQuality: 1,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
      cropperStatusBarColor: 'white',
      cropperToolbarColor: 'white',
      cropperActiveWidgetColor: 'white',
      cropperToolbarWidgetColor: '#3498DB',
    })
      .then((image) => {
        console.log('received image', image);
        this.setState({
          image: {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime,
          },
          images: null,
        });
      })
      .catch((e) => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  }

  renderAsset(image) {
    return this.renderImage(image);
  }

  renderImage(image) {
    return (
      <Image
        style={{ width: 100, height: 80, resizeMode: 'contain' }}
        source={image}
      />
    );
  }

  render() {
    const {country, countryIndex} = this.state;
    return (
      <View style={{flex:1}}>
        <View style={css.joinContainer}>
          <Text style={css.mainText}>회원가입</Text>
          <ProgressIcon
            step={2}
            maximum={4}
          />
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
              )} underlayColor=''>
              <View style={css.countryBtnStyle}>
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
                <Text style={css.buttonText2}>프로필</Text>
                {this.state.image ? this.renderAsset(this.state.image) : null}
              </View>
            </TouchableHighlight>
          </View>
          <View style={[{flexDirection:'row', justifyContent:'flex-end'}]}>
            <Text>건너뛰기</Text>
            <Icon name="chevron-forward-outline" />
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

const mapDispatchProps = (dispatch) => {
  return {
    handleSetInfo: (nick, email, country,phone, image ) => { dispatch(action.set_info(nick, email, country,phone, image))},
  }
}

// const mapDispatchProps = (dispatch) => {
//   return bindActionCreators({
//     handleSetInfo: (nick, email, country,phone, image ) => action.set_info(nick, email, country,phone, image),
//     handleSetInfo2: (nick, email, country,phone, image ) => action.set_info(nick, email, country,phone, image),
//     handleSetInfo3: (nick, email, country,phone, image ) => action.set_info(nick, email, country,phone, image),
//   }, dispatch)
// } 여러개의 액션을 한번에 사용이 가능

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
  countryBtnStyle:{
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
  buttonStyle:{
    marginLeft: 55,
    height: 100,
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
  buttonText2:{
    color: '#CACACA',
    paddingTop: 40
  }
})
export default connect(null,mapDispatchProps)(UserInfo)
