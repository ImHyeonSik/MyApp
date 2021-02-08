import React, { Component } from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";

class InfoBigButton extends Component {

  render() {
    const { nextPage } = this.props ;
    return (
      <View style={{flex: 1}}>
        <TouchableHighlight style={css.BigbtnStyle}
                            onPress={nextPage}>
          <View></View>
        </TouchableHighlight>
      </View>
    );
  }

}
const css = StyleSheet.create({
  BigbtnStyle:{
    height: 100,
    borderRadius: 15,
    margin: (5,5,5,5),
    backgroundColor: '#ffffff'
  }

})
export default InfoBigButton
