import React, {Component} from "react";
import { View, Text, StyleSheet, TouchableHighlight, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import GetServer from "../server/GetServer";
import ProfileTextContainer from "../comp/ProfileTextContainer";
import ProfileAlertContainer from "../comp/ProfileAlertContainer";

class UserProfile extends Component {
  static navigationOptions = {
    headerTitle: (
      <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
        <Text style={{fontSize:25}}>내 정보</Text>
      </View>
    ),
    headerRight: (
      <TouchableHighlight onPress={() => alert('hi')} underlayColor={""}>
        <Image style={{height: 20, width: 20,}} source={require('../../src/common/img/bar/confirm.png')}/>
      </TouchableHighlight>
    ),
    headerBackTitleVisible: false,
  };

  constructor() {
    super();
    this.state = {
      country: null,
      countryIndex: null,
      genderMaleBool: false,
      genderFeMaleBool: true,
      height:'',
      weight:'',
      birth:'',
      name:'',
      email:'',
      phone:'',
      id:''
    }
  }

  componentDidMount = async () => {
    const re = await GetServer("member/profile")
    const result = await re.json();
    this.setState({
      height:result.height,
      weight:result.weight,
      email:result.email,
      birth:result.birth,
      name:result.name,
      phone:result.phone,
      id:result.id
    })
  }

  setNameChange = (name) => {
    this.setState({name})
  }

  setEmailChange = (email) => {
    this.setState({email})
  }

  setPhoneChange = (phone) => {
    this.setState({phone})
  }

  genderCheck = (genderMaleBool) => {
    let male;
    let female;

    if(genderMaleBool === false) {
      male = require('../../src/common/img/account/gender_male_off.png')
      female = require('../../src/common/img/account/gender_female_on.png')
    }
    else if (genderMaleBool === true) {
      male = require('../../src/common/img/account/gender_male_on.png')
      female = require('../../src/common/img/account/gender_female_off.png')
    }
    return (
      <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
        <TouchableHighlight onPress={() => this.setState({genderMaleBool:true, genderFeMaleBool:false})}
                            underlayColor= 'null'>
          <Image style={{ width: 50, height: 100, margin: 10 }} source={male} />
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.setState({genderFeMaleBool:true, genderMaleBool:false})}
                            underlayColor= 'null'>
          <Image style={{ width: 50, height: 100, margin: 10 }} source={female} />
        </TouchableHighlight>
      </View>
    )
  }

  formUse = (bool) => {
    let height;
    let wight;
    let margin

    if(!bool){
      height=0, wight=0, margin=0
    }

    return (
      <ProfileAlertContainer
        titleText={"체형"}
        date={"dfd"}
        height={height}
        wight={wight}
        margin={margin}
      />
    )
  }

  render() {
    const {country, countryIndex, height, weight, birth, name, email, phone, id} = this.state;

    return (
      <ScrollView>
        <TouchableHighlight >
          <View style={css.profileContainer}>
            <Image style={{width:80,height:80, margin:10}} source={require('../../src/common/img/dog.jpg')} />
            <Text style={{fontSize:20, marginLeft:10}}>{id}</Text>
          </View>
        </TouchableHighlight>

        <View>
          <ProfileTextContainer
            value={name}
            onChangeText={(text) => this.setNameChange(text)}
          />

          <TouchableHighlight onPress={() => this.props.navigation.navigate('TabCountryPage',
            {
              onSelectCountry: (country, countryIndex) => this.setState({country, countryIndex}),
              country, countryIndex
            }
          )}>
            <View style={css.countryCheck}>
              <Text style={{fontSize:20, margin:10}}>국가</Text>
              <View style={{flex:1, flexDirection:'row',alignItems:'center', justifyContent:'flex-end',}}>
                <Text style={{fontSize:20, color:'#A9A9A9'}}>{country}</Text>
                <Icon name="chevron-forward-outline" size={25} style={{color:'#D3D3D3', margin:10}}/>
              </View>
            </View>
          </TouchableHighlight>

          <ProfileTextContainer
            value={email}
            onChangeText={(text) => this.setEmailChange(text)}
          />
          <ProfileTextContainer
            value={phone}
            onChangeText={(text) => this.setPhoneChange(text)}
          />

          <View style={css.genderContainer}>
            <Text style={{fontSize:20, marginLeft:10}}>성별</Text>
              {this.genderCheck(this.state.genderMaleBool)}
          </View>

          {this.formUse(this.state.genderFeMaleBool)}

          <ProfileAlertContainer
            titleText={"키"}
            date={height}
          />
          <ProfileAlertContainer
            titleText={"체중"}
            date={weight+"kg"}
          />
          <ProfileAlertContainer
            titleText={"생년월일"}
            date={birth}
          />
          <View style={{borderTopWidth:2, borderTopColor:'#A9A9A9'}}>
            <Text style={{margin:15, color:'#00BFFF'}}>
              옵션: 개인의 신체와 생활 패턴을 반영한 선택{'\n'}(개인 특성에 따라 상이할 수 있음)</Text>
            <ProfileAlertContainer
              titleText={"운동량"}
              date={"해당 없음"}
            />
            <ProfileAlertContainer
              titleText={"식습관"}
              date={"해당 없음"}
            />
          </View>
          <View style={{borderTopWidth:2, borderTopColor:'#A9A9A9'}}>
            <TouchableHighlight>
              <View style={css.countryCheck}>
                <Text style={{fontSize:20, margin:10}}>비밀번호 변경</Text>
                <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end',}}>
                  <Icon name="chevron-forward-outline" size={25} style={{color:'#D3D3D3', margin:10}}/>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const css = StyleSheet.create({
  profileContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#ffffff',
    borderRadius:10,
    margin: 15
  },
  countryCheck:{
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems:'center',
    margin: 15,
    borderRadius: 10,
    height:50
  },
  genderContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#ffffff',
    borderRadius:10,
    margin: 15,
    height: 130
  }
})
export default UserProfile
