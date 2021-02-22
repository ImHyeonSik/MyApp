import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

class InfoMini extends Component{
  render() {
    const { image, text } = this.props ;
    return (
      <View style={css.miniContainer}>
        <Image style={css.miniImage} source={image}/>
        <Text style={css.miniText}>{text}</Text>
      </View>
    );
  }
}
const css = StyleSheet.create({
  miniContainer: {
    flexDirection:'row',
    alignItems: 'center',
  },
  miniImage: {
    width: 15,
    height: 15
  },
  miniText: {
    fontSize: 15,
    color:"#A9A9A9",
    marginLeft: 5
  }
})
export default InfoMini
