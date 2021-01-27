import React from 'react'
import { View, Text, TouchableHighlight, Image, StyleSheet, Linking } from "react-native";

const FeedbackButton = ({ text, url, image }) => (
  <View style={css.feedContainer}>
    <TouchableHighlight
      style={css.feedButton}>
      <View style={css.feedSubContainer}>
        <Image style={css.feedImage} source={image} />
        <Text style={css.feedText}
              onPress={() =>Linking.openURL(url)}>{text}</Text>
      </View>
    </TouchableHighlight>
  </View>
)

const css = StyleSheet.create({
  feedContainer: {
    alignItems: 'flex-start',
    marginLeft: 55
  },
  feedSubContainer:{
    flexDirection: 'row',
    marginLeft: -45
  },
  feedButton: {
    marginTop: 30,
    height: 50,
    paddingLeft:30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  feedImage: {
    height: 50,
    width: 50
  },
  feedText:{
    fontSize : 20,
    paddingTop: 12,
    paddingLeft: 8
  }
})
export default FeedbackButton
