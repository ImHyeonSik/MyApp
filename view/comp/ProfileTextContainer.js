import React, {Component} from "react";
import {View, Text, StyleSheet, TextInput} from "react-native";

class ProfileTextContainer extends Component {
  render() {
    const { value, onChangeText } = this.props;
    return (
      <View style={css.classContainer}>
        <TextInput
          style={css.inData}
          placeholder={value}
          value={value}
          onChangeText={onChangeText} />
      </View>
    );
  }
}
const css = StyleSheet.create({
  classContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    borderRadius:10,
    margin:15,
    backgroundColor:'#ffffff',
    height: 50
  },
  inData:{
    fontSize:20,
    margin:10
  }
})
export default ProfileTextContainer
