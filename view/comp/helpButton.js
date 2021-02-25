import React, {Component} from 'react'
import {View, TouchableHighlight, Text ,StyleSheet} from 'react-native'

class HelpButton extends Component{
  render() {
    const {text1, text2, nextPage, ...props} = this.props;
    return(
      <View style={css.helpContainer}>
        <TouchableHighlight
          {...props}
          style={css.helpButton}
          onPress={nextPage}>
          <Text style={css.text1Style}>
            {text1}
            <Text style={css.text2Style}>{text2}</Text>
          </Text>
        </TouchableHighlight>
      </View>
      )
  }
}
const css = StyleSheet.create({
  helpContainer: {
    alignItems: 'center'
  },
  helpButton: {
    marginTop: 30,
    height: 50,
    paddingLeft:20,
    paddingRight:20,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#ffffff'
  },
  text1Style: {
    fontSize: 12
  },
  text2Style: {
    fontSize: 20,
    color:'darkblue'
  }
})
export default HelpButton
