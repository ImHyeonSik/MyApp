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

class HomeScreen extends Component {
  static navigationOptions = {
     headerTitle: (
       <View style={{ flex:1 , alignItems: "center"}}>
        <Image style={{width: 100, height: 20,}} source={require('../src/common/img/logo.png')} />
       </View>
     ),
    headerRight: (
      <TouchableHighlight onPress={() => alert('hi')} underlayColor={""}>
        <Image style={{height: 20, width: 20,}} source={require('../src/common/img/bar/noti.png')}/>
      </TouchableHighlight>
    ),
  };

  constructor() {
    super();
    this.state = {
      modalVisible: false
    }
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
    return (
      <ScrollView>
        <Modal
          animationType="slide"
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
                  <Text style={{fontSize: 20, marginBottom: 20}}>OSD</Text>
                  <InfoMini
                  text={"경상북도 포항시 남구 청암로 77"}
                  image={require('../src/common/img/address.png')}/>
                  <InfoMini
                    text={"054-279-4467"}
                    image={require('../src/common/img/telephone.png')} />
                  <InfoMini
                    text={"osd@onesoftdigm.com"}
                    image={require('../src/common/img/mail.png')} />

                    <View style={{flex:1, marginTop: 40, marginBottom: 60}}>
                      <Swiper style={css.wrapper} showsButtons loop={true}
                              autoplay  // 자동 스크롤 사용
                              autoplayDelay={2000} // 스크롤 최소 대기시간 2초
                              autoplayInterval={2000} //스크롤 시간 간격 2초
                              paginationStyle={{position: 'absolute',bottom: undefined, left: 0, top: -30, right: 0}}>
                        <View testID="Hello" style={css.slide1}>
                          <Text style={css.text}>Hello Swiper</Text>
                        </View>
                        <View testID="Beautiful" style={css.slide2}>
                          <Text style={css.text}>Beautiful</Text>
                        </View>
                        <View testID="Simple" style={css.slide3}>
                          <Text style={css.text}>And simple</Text>
                        </View>
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
                <Text style={{fontSize: 20}}>OSD</Text>
                <InfoMini
                  text={"054-279-4467"}
                  image={require('../src/common/img/telephone.png')} />
                <InfoMini
                  text={"osd@onesoftdigm.com"}
                  image={require('../src/common/img/mail.png')} />
              </View>
            </View>
          </TouchableHighlight>

          <ProgressBarContainer
            image={require('../src/common/img/card/food.png')}
            nowText={"0"}
            nowSmallText={"8968.4 남음"}
            containerColor={"#9ACD32"}
            maximumText={"8968.4"}
          />

          <ProgressBarContainer
            image={require('../src/common/img/card/activity.png')}
            nowText={"581"}
            nowSmallText={"31.8 소비 칼로리"}
            containerColor={"#228B22"}
            maximumText={"11200"}
          />

          <TouchableHighlight style={css.BigBtnStyle}>
            <View style={{flex: 1, marginLeft: 20, flexDirection:'row', alignItems: 'center'}}>
              <Image style={{width: 50, height: 50}} source={require('../src/common/img/card/bodyfat.png')}/>
              <BodyFatContainer
                infoText={"30.5%"}
                iconSize={8}
                titleText={"BFP"}
              />
              <BodyFatContainer
                infoText={"24.9"}
                iconSize={8}
                titleText={"BMI"}
              />
              <BodyFatContainer
                infoText={"24.6kg"}
                iconSize={8}
                titleText={"SMM"}
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
            dateText={"75 / 99"}
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
            dateText={"66.7 kg"}
            textColor={'#1E90FF'}/>
          <InfoSmallButton
            text={"목표"}
            image={require('../src/common/img/card/goals.png')}
            dateText={""} />
          <InfoSmallButton
            text={"미션"}
            image={require('../src/common/img/card/mission.png')}
            dateText={"0 / 0"}
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
