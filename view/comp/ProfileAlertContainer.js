import React, {Component} from "react";
import {View, Text, Alert, StyleSheet, TouchableHighlight} from "react-native";

class ProfileAlertContainer extends Component{

  profileAlert = () => {
    Alert.alert("아무거나","하세요")
  }
  render() {
    const { titleText, date, height = 50, wight, margin = 15} = this.props;
    return (
      <TouchableHighlight onPress={()=>this.profileAlert()}>
        <View style={[css.classContainer,{height:height},{width:wight},{margin:margin}]}>
          <View>
            <Text style={{fontSize:20, margin: 15}}>{titleText}</Text>
          </View>
          <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>
            <Text style={{fontSize:20, color:'#A9A9A9'}}>{date}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}
const css = StyleSheet.create({
  classContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:'#ffffff',
  }
})
export default ProfileAlertContainer
