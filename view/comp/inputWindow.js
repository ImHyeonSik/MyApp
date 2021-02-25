import React, {Component} from 'react'
import {View,TextInput,StyleSheet } from 'react-native'

class InputWindow extends Component {
  render() {
    const {basicText, value, onChangeText, ...props} = this.props;
   return(
    <View style={[css.inputContainer]}>
      <TextInput
        {...props}
        ref={ref => this.input = ref }
        style={css.input}
        placeholder={basicText}
        placeholderTextColor='#CACACA'
        selectionColor='#666666'
        value={value}
        onChangeText={onChangeText}
      />
    </View>
   );
  }

  focus = () => this.input && this.input.focus()
}
const css = StyleSheet.create({
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
