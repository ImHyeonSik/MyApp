import React, { Component } from "react";
import { View, StyleSheet, TouchableHighlight, Text, Image } from "react-native";

class InfoSmallButton extends Component {

  render() {
    const { nextPage, image, text , dateText = " ", textColor} = this.props ;
    return (
        <TouchableHighlight style={css.smallContainer}
                            onPress={nextPage}>
          <View style={css.SmallStyle}>
            <Image style={css.cardImage} source={image}/>
            <Text style={[css.dateTextStyle, {color: textColor}]}>{dateText}</Text>
            <Text>{text}</Text>
          </View>
        </TouchableHighlight>
    );
  }

}
const css = StyleSheet.create({
  SmallStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  smallContainer:{
    height: 150,
    width: 125,
    borderRadius: 15,
    margin: (5,5,5,5),
    backgroundColor: '#ffffff'
  },
  cardImage:{
    width: 80,
    height: 80
  },
  dateTextStyle:{
    fontSize: 20,
    marginBottom: 10,
  }
})
export default InfoSmallButton
