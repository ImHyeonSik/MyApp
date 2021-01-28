import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableHighlight } from 'react-native'

class MainButton extends Component {
  render() {
    const {text, checkId, color = 'lightskyblue', ...props} = this.props ;
    return (
      <View style={css.buttonContainer}>
        <TouchableHighlight
          {...props}
          style={[css.button, { backgroundColor: color }]}
          onPress={checkId}>
          <Text style={css.loginButton}>
            {text}
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const css = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center'
  },
  button:{
    marginTop: 30,
    height: 50,
    paddingLeft:20,
    paddingRight:20,
    width: 300,
    backgroundColor: 'lightskyblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  loginButton:{
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 20
  }
})
export default MainButton
