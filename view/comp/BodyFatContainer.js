import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class BodyFatContainer extends Component {

  constructor(props) {
    super(props);
    const arr = new Array(props.iconSize);
    for(let i=0; i<props.iconSize+1; i++) {
      arr[i]=i;
    }
    this.state = {
      arr
    }
  }

  iconAmount = (gen) => {
    let result;

    if(gen >= 180)
      result = 8
    else if(gen < 180 && gen >= 165)
      result = 7
    else if(gen < 165 && gen >= 150)
      result = 6
    else if(gen < 150 && gen >= 135)
      result = 5
    else if(gen < 135 && gen >= 120)
      result = 4
    else if(gen < 120 && gen >= 105)
      result = 3
    else if(gen < 105 && gen >= 90)
      result = 2
    else if(gen < 90 && gen >= 75)
      result = 1
    else if(gen < 75 && gen >= 60)
      result = 0

    return result
  }

  render() {
    const { infoText, titleText, iconSize, genData} = this.props;
    const { arr } = this.state;
    return (
      <View style={css.bodyContainer}>
        <Text style={{fontSize:25, color:'#32CD32'}}>{infoText}</Text>
        <View style={css.iconSizeContainer}>
          {arr.map(index => {
            return <Icon
              key={index}
              size={iconSize}
              name={index <= this.iconAmount(genData) ? "radio-button-on-outline" : "radio-button-off-outline"}
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
