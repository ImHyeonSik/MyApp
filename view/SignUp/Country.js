import React, {Component, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TextInput, TouchableHighlight } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

class Country extends Component {
  static navigationOptions = {
    headerTitle: () => false,
    headerBackTitleVisible: false,
  }

  constructor() {
    super();
    this.state = {
      keyword: '',
      countryList: [
        { id: 'AD', name: '안도라', }, { id: 'AE', name: '아랍 에미리트', }, { id: 'AF', name: '아프가니스탄', }, { id: 'AG', name: '앤티가 바부 다', },
        { id: 'AI', name: '앵 궐라', }, { id: 'AL', name: '알바니아', }, { id: 'AM', name: '아르메니아', }, { id: 'AN', name: '네덜란드 령앤 틸리 스', },
        { id: 'AO', name: '앙골라', }, { id: 'AQ', name: '남극대륙', }, { id: 'AR', name: '아르헨티나', }, { id: 'AS', name: '아메리칸 사모아', },
        { id: 'AT', name: '오스트리아', }, { id: 'AU', name: '호주', }, { id: 'AW', name: '아루바', }, { id: 'AX', name: '올란드 제도', }, { id: 'AZ', name: '아제르바이잔', },
        { id: 'BA', name: '보스니아 헤르체고비나', }, { id: 'BB', name: '바베이도스', }, { id: 'BD', name: '방글라데시', }, { id: 'BE', name: '벨기에', }, { id: 'KR', name: '대한민국', },
      ],
      list: [],
      countryBackUp: [],
      stateId: null,
   }
  }

  componentDidMount() {
    this.setState({list: this.state.countryList, countryBackUp: this.state.countryList})
  }

  cancelButton = (keyword = '') => {
    this.setState({keyword, list: this.state.countryList});
  }

  keywordChange = (keyword) => {
    const {countryList, countryBackUp} = this.state;
    this.setState({ keyword });
    if(keyword === '') {
      this.setState({ list: this.state.countryBackUp});
    }
    else{
      let result = countryBackUp
      result = countryList.filter((v) => (v.name.match(keyword)))
      this.setState({
        list:result,
      })
    }
  }

  onPressCountry = (item, index) => {
    const { navigation } = this.props;
    const { onSelectCountry } = navigation.state.params;
    onSelectCountry(item.name, index)
    this.props.navigation.pop();
  }

  renderItem = ({ item, index }) => {
    const { country, countryIndex } = this.props.navigation.state.params;
    const backgroundColor = index === countryIndex ? "#0000FF" : "#ffffff";

    return (
      <TouchableHighlight onPress={() => this.onPressCountry(item, index)}>
        <View style={css.item}>
          <Text style={css.title}>{flags(item.id)}{item.name}</Text>
          <Icon name="checkmark-outline" color={backgroundColor} />
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const { list } = this.state;

    return (
      <SafeAreaView style={css.container}>
        <View style={css.searchContainer}>
          <Icon name="search"/>
          <TextInput
            style={css.searchStyle}
            placeholder="검색"
            placeholderTextColor='#CACACA'
            selectionColor='#666666'
            value={this.state.keyword}
            onChangeText={(text) => this.keywordChange(text)}
          />
          <TouchableHighlight onPress={(text) => this.cancelButton(text)}>
            <Text>Cancel</Text>
          </TouchableHighlight>
        </View>
        <FlatList
          data={list}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
          extraData={this.state.stateId}
        />
      </SafeAreaView>
    );
  }
}

const flags = (code = 'KR') => {
  const codeUp = code.toUpperCase();
  return `${String.fromCodePoint(codeUp.codePointAt(0) - 0x41 + 0x1F1E6)}${String.fromCodePoint(codeUp.codePointAt(1) - 0x41 + 0x1F1E6)}`
};

const css = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  searchContainer:{
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderBottomWidth:0.3,
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 15,
  },
  searchStyle : {
    width: 350,
    height:20
  }
})
export default Country
