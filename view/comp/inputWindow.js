import React, {Component} from 'react'
import {View,TextInput,StyleSheet } from 'react-native'

class InputWindow extends Component{
  render() {
   return(
    <View style={[styles.inputContainer]}>
      <TextInput
        style={styles.input}
        placeholder={this.props.basicText}
        placeholderTextColor='#CACACA'
        selectionColor='#666666'
        value={this.props.value}
        onChangeText={this.props.onChangeText}
      />
    </View>
   );
  }
}
const styles = StyleSheet.create({
  inputContainer:{
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center'
  },
  input:{
    height: 50,
    width: 300,
    backgroundColor: '#ffffff',
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 10
  }
})
export default InputWindow
