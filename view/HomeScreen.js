import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  ImageBackground,
  Alert,
} from "react-native";
import InfoSmallButton from "./comp/InfoSmallButton";
import InfoMini from "./comp/InfoMini";
import Swiper from "react-native-swiper";
import ProgressBarContainer from "./comp/ProgressBarContainer";
import BodyFatContainer from "./comp/BodyFatContainer";
import GetServer from "./server/GetServer";

class HomeScreen extends Component {
  static navigationOptions = {
     headerTitle: () => (
       <View style={{ flex:1 , alignItems: "center"}}>
        <Image style={{width: 100, height: 20,}} source={require('../src/common/img/logo.png')} />
       </View>
     ),
    headerRight: () => (
      <TouchableHighlight onPress={() => alert('hi')} underlayColor={""}>
        <Image style={{height: 20, width: 20,}} source={require('../src/common/img/bar/noti.png')}/>
      </TouchableHighlight>
    ),
  };

  constructor() {
    super();
    this.state = {
      modalVisible: false,
      companyName: '',
      compAddress: '',
      compTel: '',
      compEmail: '',
      bpm: '',
      oxygen: '',
      totalSteps: '',
      goalSteps: '',
      goalCal: '',
      totalCal: 0,
      bfp: '',
      bmi: '',
      smm: '',
      weight: '',
      missionFinish: '',
      missionCount: '',
      genBfp: '',
      genBmi: '',
      genSmm: '',
      fefefe: [],
    }
  }
  componentDidMount = async () => {
    try {
      const re = await GetServer("member/dashboard")
      const result = await re.json();
      this.useEffect(result.company.tel)
      this.setState({
        companyName: result.company.compName,
        compAddress: result.company.address,
        compEmail: result.company.email,
        bpm: result.bpm.bpm,
        oxygen: result.bpm.oxygen,
        totalSteps: result.activity.totalSteps,
        goalSteps: result.activity.goalSteps,
        goalCal: result.meal.goalCal,
        // totalCal:result.meal.totalCal,
        bfp: result.body.bfp,
        bmi: result.body.bmi,
        smm: result.body.smm,
        weight: result.body.weight,
        missionFinish: result.mission.missionFinished,
        missionCount: result.mission.missionCount,
        genBfp: result.body.genBfp,
        genBmi: result.body.genBmi,
        genSmm: result.body.genSmm,
        fefefe: result.company.listAds,
      })
    } catch (e){
      console.log(e)
    }
  }

  useEffect = (value) => {
  if (value.length === 10) {
    this.setState({compTel: value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')})}
  }

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible})
  }

  setWeight = () => {
    Alert.alert(
      "체중(kg)",
      "sdfsdf"
      )
  }

  render() {
    const { companyName, compAddress, compTel, compEmail, bpm, oxygen,
      totalSteps, goalSteps, goalCal, totalCal, bfp, bmi, smm, weight, missionFinish, missionCount,
      genBfp, genBmi, genSmm } = this.state;
    return (
      <ScrollView>
        <Modal
          animationType="none"
          transparent={true}
          visible={this.state.modalVisible}>
          <TouchableHighlight style={{flex:1}} onPress={() => {this.setModalVisible({modalVisible: false})}} underlayColor={""}>
            <View style={css.modalBackContainer}>
              <TouchableHighlight style={ css.modalContainer } >
              <View style={ css.modalContainer2 }>
                <View style={{flex:1, flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
                  <Image source={require('../src/common/img/bodyComment/exercise.png')} />
                </View>
                <View style={{flex:4, flexDirection:'column', justifyContent: 'flex-start',}}>
                  <Text style={{fontSize: 20, marginBottom: 20}}>{companyName}</Text>
                  <InfoMini
                  text={compAddress}
                  image={require('../src/common/img/address.png')}/>
                  <InfoMini
                    text={compTel}
                    image={require('../src/common/img/telephone.png')} />
                  <InfoMini
                    text={compEmail}
                    image={require('../src/common/img/mail.png')} />

                    <View style={{flex:1, marginTop: 40, marginBottom: 60}}>
                      <Swiper style={css.wrapper} showsButtons loop={true}
                              autoplay  // 자동 스크롤 사용
                              autoplayDelay={2000} // 스크롤 최소 대기시간 2초
                              autoplayInterval={2000} //스크롤 시간 간격 2초
                              paginationStyle={{position: 'absolute',bottom: undefined, left: 0, top: -30, right: 0}}>
                        {this.state.fefefe.map(item => {
                          return(
                            <View key={item.order} style={css.slide2}>
                              <Image source={{uri:`http://141.223.149.91:8381${item.urlAds}`}} style={{height:'100%', width:'100%'}} />
                            </View>
                          )
                        })}
                      </Swiper>
                    </View>
                </View>
              </View>
              </TouchableHighlight>
            </View>
          </TouchableHighlight>
        </Modal>

        <View style={{flex: 1}}>
          <TouchableHighlight style={css.BigBtnStyle} onPress={() => this.setModalVisible(!this.state.modalVisible)} underlayColor={""}>
            <View style={css.firstImageView}>
              <Image style={{width: 70, height: 70}} source={require('../src/common/img/bodyComment/exercise.png')}/>
              <View style={{flex: 3, marginLeft: 30}}>
                <Text style={{fontSize: 20}}>{companyName}</Text>
                <InfoMini
                  text={compTel}
                  image={require('../src/common/img/telephone.png')} />
                <InfoMini
                  text={compEmail}
                  image={require('../src/common/img/mail.png')} />
              </View>
            </View>
          </TouchableHighlight>

          <ProgressBarContainer
            image={require('../src/common/img/card/food.png')}
            nowText={totalCal}
            nowSmallText={`${(goalCal-totalCal)} 남음`}
            containerColor={"#9ACD32"}
            maximumText={goalCal}
          />

          <ProgressBarContainer
            image={require('../src/common/img/card/activity.png')}
            nowText={totalSteps}
            nowSmallText={"31.8 소비 칼로리"}
            containerColor={"#228B22"}
            maximumText={goalSteps}
          />

          <TouchableHighlight style={css.BigBtnStyle}>
            <View style={{flex: 1, marginLeft: 20, flexDirection:'row', alignItems: 'center'}}>
              <Image style={{width: 50, height: 50}} source={require('../src/common/img/card/bodyfat.png')}/>
              <BodyFatContainer
                infoText={`${bfp}%`}
                iconSize={8}
                titleText={"BFP"}
                genData={genBfp}
              />
              <BodyFatContainer
                infoText={bmi}
                iconSize={8}
                titleText={"BMI"}
                genData={genBmi}
              />
              <BodyFatContainer
                infoText={`${smm}kg`}
                iconSize={8}
                titleText={"SMM"}
                genData={genSmm}
              />
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={css.BigBtnStyle}>
            <View>
              <ImageBackground style={css.challengeImage} imageStyle={{borderRadius: 15}} source={require('../src/common/img/challenge.jpg')}>
                <View style={{flex:1 ,marginTop: 3, marginLeft:10, justifyContent:"space-around"}}>
                  <Text style={{color:'#ffffff' , fontWeight: "bold", fontSize: 20}}> Let's create {'\n'}
                  <Text style={{fontWeight: "normal"}}>your challenge!</Text></Text>
                  <TouchableHighlight style={{backgroundColor:"#ffffff", width: 90, borderRadius: 3}}>
                    <Text style={{fontSize: 15, marginLeft:4}}>Create Now</Text>
                  </TouchableHighlight>
                </View>
              </ImageBackground>
            </View>
          </TouchableHighlight>

        </View>
        <View style={css.smallBtnContainer}>
          <InfoSmallButton
            text={"심박"}
            image={require('../src/common/img/card/bpm.png')}
            dateText={`${bpm} / ${oxygen}`}
            textColor={'#ff6347'}/>
          <InfoSmallButton
            text={"스트레스"}
            image={require('../src/common/img/card/stress.png')}
            dateText={"보통"}
            textColor={'#008B8B'}/>
          <InfoSmallButton
            text={"온도"}
            image={require('../src/common/img/card/temp.png')}
            dateText={"62.2 °C"}
            textColor={'#90EE90'}/>
          <InfoSmallButton
            text={"체중"}
            image={require('../src/common/img/card/weight.png')}
            nextPage={this.setWeight}
            dateText={`${weight} kg`}
            textColor={'#1E90FF'}/>
          <InfoSmallButton
            text={"목표"}
            image={require('../src/common/img/card/goals.png')}
            dateText={""} />
          <InfoSmallButton
            text={"미션"}
            image={require('../src/common/img/card/mission.png')}
            dateText={`${missionCount} / ${missionFinish}`}
            textColor={'#20B2AA'}/>
        </View>
      </ScrollView>
    );
  }
}
const css = StyleSheet.create({
  firstImageView:{
    flex: 1,
    marginLeft: 20,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  smallBtnContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: 'space-between'
  },
  BigBtnStyle:{
    height: 100,
    borderRadius: 15,
    margin: (5,5,5,5),
    backgroundColor: '#ffffff'
  },
  modalContainer:{
    flex:1 ,
    backgroundColor: 'white',
    marginTop: 200 ,
    marginBottom: 200,
    borderRadius: 15,
    width:300,
    opacity: 1
  },
  modalContainer2:{
    flex:1 ,
    backgroundColor: 'white',
    borderRadius: 15,
    width:300,
    opacity: 1
  },
  modalBackContainer:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#000000aa",
  },
  challengeImage:{
    height: '100%',
    width: '100%'
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default HomeScreen;
