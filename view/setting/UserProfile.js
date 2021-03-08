import React, {Component} from "react";
import { View, Text, StyleSheet, TouchableHighlight, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import GetServer from "../server/GetServer";
import ProfileTextContainer from "../comp/ProfileTextContainer";
import ProfileAlertContainer from "../comp/ProfileAlertContainer";
import OptionModal from "../comp/OptionModal";

class UserProfile extends Component {
  static navigationOptions = {
    headerTitle: () => (
      <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
        <Text style={{fontSize:25}}>내 정보</Text>
      </View>
    ),
    headerRight: () => (
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
      id:'',
      formText: '사과형',
      exerciseText: '해당 없음',
      mealText: '해당 없음',
      exerciseState: false,
      mealState: false,
      formState: false,

      optionFormList: [
        {
          id:0,
          image: require('../../src/common/img/body/body_apple.png'),
          title: '사과형'
        },
        {
          id:1,
          image: require('../../src/common/img/body/body_banana.png'),
          title: '바나나형'
        },
        {
          id:2,
          image: require('../../src/common/img/body/body_pear.png'),
          title: '배형'
        }
        ],
      optionExercise: [
        {
          id:0,
          image: null,
          title: '주 4회 4시간 이상 운동하고 있다.'
        },
        {
          id:1,
          image: null,
          title: '주 3회 3시간 이상 운동하고 있다.'
        },
        {
          id:2,
          image: null,
          title: '주 2회 2시간 이상 운동하고 있다.'
        },
        {
          id:3,
          image: null,
          title: '주 1회 1시간 이상 운동하고 있다.'
        },
        {
          id:4,
          image: null,
          title: '해당 없음'
        }
      ],
      optionMeal: [
        {
          id:0,
          image: null,
          title: '식이관리 상'
        },
        {
          id:1,
          image: null,
          title: '식이관리 중'
        },
        {
          id:2,
          image: null,
          title: '식이관리 하'
        },
        {
          id:3,
          image: null,
          title: '해당 없음'
        },
        {
          id:4,
          image: null,
          title: '식사량이 많은 편이다'
        },
      ]
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
      id:result.id,
    })
  }

  chExercise = () => {
    this.setState({exerciseState:false})
  }

  chMeal = () => {
    this.setState({mealState:false})
  }

  chForm = () => {
    this.setState({formState:false})
  }

  setFormText = (text) => {
    this.setState({formText:text})
  }

  setExerciseText = exerciseText => {
    this.setState({exerciseText})
  }

  setMealText = (text) => {
    this.setState({mealText:text})
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

  render() {
    const {country, countryIndex, height, weight, birth, name, email, phone, id,
       optionFormList, optionExercise, optionMeal, formText, exerciseText, mealText} = this.state;

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

          {this.state.genderFeMaleBool &&
          <TouchableHighlight onPress={() => this.setState({formState:true})} underlayColor=''>
            <View style={css.modalContainer}>
              <View>
                <Text style={{ fontSize: 20, margin: 15 }}>체형</Text>
              </View>
              <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: '#A9A9A9' }}>{formText}</Text>
              </View>
            </View>
          </TouchableHighlight>}

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

            <TouchableHighlight onPress={() => this.setState({exerciseState:true})} underlayColor=''>
              <View style={css.modalContainer}>
                <View>
                  <Text style={{ fontSize: 20, margin: 15 }}>운동량</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                  <Text style={{ fontSize: 20, color: '#A9A9A9' }}>{exerciseText}</Text>
                </View>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => this.setState({mealState:true})} underlayColor=''>
              <View style={css.modalContainer}>
                <View>
                  <Text style={{ fontSize: 20, margin: 15 }}>식습관</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                  <Text style={{ fontSize: 20, color: '#A9A9A9' }}>{mealText}</Text>
                </View>
              </View>
            </TouchableHighlight>

            <OptionModal
              titleText={"체형"}
              date={formText}
              list={optionFormList}
              chText={this.setFormText}
              visible={this.state.formState}
              chVisible={this.chForm}
            />
            <OptionModal
              titleText={"운동량"}
              date={exerciseText}
              list={optionExercise}
              chText={this.setExerciseText}
              visible={this.state.exerciseState}
              chVisible={this.chExercise}
            />
            <OptionModal
              titleText={"식습관"}
              date={mealText}
              list={optionMeal}
              chText={this.setMealText}
              visible={this.state.mealState}
              chVisible={this.chMeal}
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
  },
  modalContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:'#ffffff',
    height: 50,
    margin: 15,
  }
})
export default UserProfile
