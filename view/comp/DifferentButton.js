import React, {Component} from 'react'
import { View, Text, Image, TouchableHighlight, StyleSheet, Linking } from "react-native";

class DifferentButton extends Component{
  render() {
    const {text, image, url, ...props} = this.props;
    return(
      <View style={css.differentContainer}>
        <TouchableHighlight
          {...props}
          style={css.differentButton}
          onPress={() => Linking.openURL(url)}>
          <View style={css.differentSub}>
            <Image style={css.differentImage} source={image} />
            <Text style={css.differentText}>{text}</Text>
          </View>
        </TouchableHighlight>
      </View>
      )
  }
}

const css = StyleSheet.create({
  differentContainer: {
    alignItems: 'center'
  },
  differentButton:{
    marginTop: 30,
    height: 50,
    width: 300,
    paddingLeft:30,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1
  },
  differentImage:{
    height: 30,
    width: 30,
    marginTop: 5,
    alignItems: 'flex-start'
  },
  differentText:{
    flex:1,
    fontSize: 20,
    marginLeft: 35,
    marginTop: 8
  },
  differentSub:{
    flexDirection:'row',
    alignItems: 'flex-start'
  }
})
export default DifferentButton
