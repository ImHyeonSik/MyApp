import React, { Component } from "react";
import { View, StyleSheet, TouchableHighlight, Text, Image } from "react-native";

class InfoSmallButton extends Component {

  render() {
    const { nextPage, image, text } = this.props ;
    return (
      <View style={{flex: 1}}>
        <TouchableHighlight style={css.BigbtnStyle}
                            onPress={nextPage}>
          <View style={css.SmallStyle}>
            <Image source={image}/>
            <Text>{text}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

}
const css = StyleSheet.create({
  SmallStyle: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  BigbtnStyle:{
    height: 150,
    width: 120,
    borderRadius: 15,
    margin: (5,5,5,5),
    backgroundColor: '#ffffff'
  }
})
export default InfoSmallButton
