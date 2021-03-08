import React, { Component } from "react";
import { View, Text, StyleSheet, Modal, Image, TouchableHighlight } from "react-native";

class OptionModal extends Component {
  render() {
    const { titleText, list = [], chText,
            visible, chVisible} = this.props;

    return (
      <View>
        <Modal
          animationType="none"
          transparent={true}
          visible={visible}
        >
          <TouchableHighlight style={css.modalBackBtn} onPress={chVisible} underlayColor="">
            <View style={css.modalMainContainer}>
              <Image source={require('../../src/common/img/signature.png')}
                     style={{ width: 50, height: 50, margin: 10 }} />
              <Text style={{ fontSize: 20, fontWeight: "bold", margin: 10 }}>{titleText}</Text>

              {list.map(item => {
                return (
                  <TouchableHighlight key={item.id} style={css.btnStyle} onPress={() => {
                    chText(item.title);
                    chVisible()
                  }} underlayColor='' >
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                      {item.image && <Image source={item.image} />}
                      <Text style={{ fontSize: 20 }}>{item.title}</Text>
                    </View>
                  </TouchableHighlight>
                )
              })}
            </View>
          </TouchableHighlight>
        </Modal>
      </View>
    );
  }
}
const css = StyleSheet.create({
  modalBackBtn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#000000aa"
  },
  modalMainContainer: {
    flex:1 ,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 200 ,
    marginBottom: 250,
    borderRadius: 15,
    width:300,
    opacity: 1
  },
  btnStyle: {
    borderTopWidth:0.5,
    width: '100%',
    height: 40,
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default OptionModal
