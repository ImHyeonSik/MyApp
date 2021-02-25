import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableHighlight} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class SettingMenu extends Component {
  render() {
    const { titleText, dateText } = this.props;
    return (
        <TouchableHighlight>
          <View style={css.menuContainer}>
            <Text style={{fontSize:20}}>{titleText}</Text>
            <Icon name="chevron-forward-outline" size={25} style={{color:'#20B2AA' }}/>
          </View>
        </TouchableHighlight>
    );
  }
}
const css = StyleSheet.create({
  menuContainer:{
    flex:1,
    backgroundColor:'#ffffff',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    margin:5,
  }
})
export default SettingMenu
