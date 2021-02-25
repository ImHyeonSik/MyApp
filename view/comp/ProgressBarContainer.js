import React, {Component} from "react";
import { Image, TouchableHighlight, View, StyleSheet, Text } from "react-native";
import { ProgressBar, Colors } from 'react-native-paper';

class ProgressBarContainer extends Component {
  render() {
    const { image, nowText, maximumText, nowSmallText, containerColor } = this.props;
    return (
      <TouchableHighlight style={css.btnContainer}>
        <View style={{flex:1, width:'90%', marginLeft: 20, marginTop: 10}}>
          <View style={{flex:1, flexDirection:'row',alignItems:'center'}}>
            <Image style={css.btnImage} source={image}/>
            <View style={{flexDirection:'row', alignItems: 'baseline'}}>
              <Text style={[css.nowTextStyle,{color: containerColor}]}>{nowText}</Text>
              <Text style={[css.nowSmallTextStyle,{color: containerColor}]}>{nowSmallText}</Text>
            </View>
          </View>
          <View style={{flex:1, marginTop: 15 }}>
            <ProgressBar progress={0.5} color={containerColor} visible={true}/>
          </View>
          <View style={{flexDirection:'column', alignItems:'flex-end', marginTop:-20}}>
            <Text style={{color:'#808080'}}>{maximumText}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}
const css = StyleSheet.create({
  btnContainer:{
    height: 100,
    borderRadius: 15,
    margin: (5,5,5,5),
    backgroundColor: '#ffffff'
  },
  btnImage:{
    width: 50,
    height: 50
  },
  nowTextStyle:{
    fontSize:30
  },
  nowSmallTextStyle:{
    fontSize: 15,
    // marginTop: 15,
    marginLeft: 8
  },
  maximumText:{

  }
})

export default ProgressBarContainer;
