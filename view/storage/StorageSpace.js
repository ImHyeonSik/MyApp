import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";

const setStorage = async (key,value) => {
  try{
    await AsyncStorage.setItem(key,value)
  } catch (e) {
    Alert.alert("오류",console.log(e))
  }
  console.log('setStorage Done.')
}

const getStorage = async (key) => {
  try {
    return await AsyncStorage.getItem(key)
  } catch (e) {
    Alert.alert("오류",console.log(e))
  }
  console.log('getStorage Done.')
}

const removeStorage = async (key) => {
  try{
    await AsyncStorage.removeItem(key)
  } catch (e) {
    Alert.alert("오류",console.log(e))
  }
  console.log('removeStorage Done.')
}

export {setStorage, getStorage, removeStorage}
