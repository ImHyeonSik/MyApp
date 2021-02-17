import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class ProgressIcon extends Component {
  render() {
    const { step, maximum } = this.props;
    const arr = new Array(maximum);
    for(let i=0; i<maximum+1; i++) {
        arr[i]=i;
    }
    return (
      <View style={css.iconContainer}>
        {arr.map(index => {
          return <Icon
            name={index <= step ? "radio-button-on-outline" : "radio-button-off-outline"}
            color={index <= step ? "skyblue" : null}
          />
        })}
      </View>
    );
  }
}
const css = StyleSheet.create({
  iconContainer:{
    marginTop: 50,
    marginLeft: 70,
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
})

export default ProgressIcon
