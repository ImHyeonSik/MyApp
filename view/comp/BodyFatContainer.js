import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class BodyFatContainer extends Component {
  render() {
    const { infoText, titleText, iconSize } = this.props;
    const arr = new Array(iconSize);
    for(let i=0; i<iconSize+1; i++) {
      arr[i]=i;
    }
    return (
      <View style={css.bodyContainer}>
        <Text style={{fontSize:25, color:'#32CD32'}}>{infoText}</Text>
        <View style={css.iconSizeContainer}>
          {arr.map(index => {
            return <Icon
              size={8}
              name={index <= 3 ? "radio-button-on-outline" : "radio-button-off-outline"}
              color={"#32CD32"}
            />
          })}
        </View>
        <Text style={{fontSize:20}}>{titleText}</Text>
      </View>
    );
  }
}
const css = StyleSheet.create({
  bodyContainer:{
    flex:1,
    height:70,
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'space-between'
  },
  iconSizeContainer:{
    flexDirection:'row'
  }
})

export default BodyFatContainer;
