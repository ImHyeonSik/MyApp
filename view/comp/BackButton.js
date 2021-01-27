import React, {Component} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

class BackButton extends Component {
  render() {
    return (
      <View style={css.BackStyle}>
          <Button onPress={() => this.props.navigation.navigate('Home')} title="Back" />
      </View>
    );
  }
}

const css = StyleSheet.create({
  BackStyle: {
    marginTop: 50,
    marginBottom: -50,
    alignItems:"flex-start"
  },
})

export default BackButton
