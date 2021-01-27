import React from 'react'
import {View, TouchableHighlight, Text ,StyleSheet, Button} from 'react-native'

const HelpButton = ({text1, text2, nextpage}) => (
  <View style={css.helpContainer}>
    <TouchableHighlight
      style={css.helpButton}
      onPress={nextpage}>
      <Text style={css.text1Style}>
        {text1}
        <Text style={css.text2Style}>{text2}</Text>
      </Text>
    </TouchableHighlight>
  </View>
)
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
