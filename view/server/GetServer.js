import React from "react";
import { getStorage } from "../storage/StorageSpace";

const GetServer = async (site, info) => {
  const value = await getStorage('server')
  return new Promise((resolve, reject) =>
    fetch(`서버주소/${site}${encode(info)}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': value,
      }
    }).then( r => { // json 을 여기에 병학하기
      resolve(r)
    }).catch(e => {
      console.log(e);
    })
  )
};

const encode = (params = {}) => {
  const esc = encodeURIComponent;
  // param = {name: this.state.inputText, pw: "1111"}
  // ["name", "pw"].map ==> 1. k = name  / 2. k = pw
  return '?' + Object.keys(params).map(k => `${esc(k)}=${esc(params[k])}`).join('&')
};

export default GetServer
