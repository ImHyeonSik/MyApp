import React, { Component } from "react";
import { View, Text, StyleSheet, Modal, Image, TouchableHighlight } from "react-native";

class OptionModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible1: false,
    }
  }

  setModal = () => {
    this.setState({ modalVisible1: false })
  }

  render() {
    const { titleText, list = [], date, height = 50, wight, margin = 15, chText } = this.props;

    return (
      <View>
        <Modal
          animationType="none"
          transparent={true}
          visible={this.state.modalVisible1}
        >
          <TouchableHighlight style={css.modalBackBtn} onPress={this.setModal} underlayColor="">
            <View style={css.modalMainContainer}>
              <Image source={require('../../src/common/img/signature.png')}
                     style={{ width: 50, height: 50, margin: 10 }} />
              <Text style={{ fontSize: 20, fontWeight: "bold", margin: 10 }}>{titleText}</Text>

              {list.map(item => {
                return (
                  <TouchableHighlight key={item.id} style={css.btnStyle} onPress={() => {
                    this.setModal();
                    chText(item.title)
                  }} underlayColor='' >
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                      {item.image && <Image source={item.image}/>}
                      <Text style={{ fontSize: 20 }}>{item.title}</Text>
                    </View>
                  </TouchableHighlight>
                )
              })}
            </View>
          </TouchableHighlight>
        </Modal>

        <TouchableHighlight onPress={() => this.setState({ modalVisible1: true })}>
          <View style={[css.classContainer, { height: height }, { width: wight }, { margin: margin }]}>
            <View>
              <Text style={{ fontSize: 20, margin: 15 }}>{titleText}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, color: '#A9A9A9' }}>{date}</Text>
            </View>
          </View>
        </TouchableHighlight>
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
  classContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:'#ffffff',
  }
})

export default OptionModal
