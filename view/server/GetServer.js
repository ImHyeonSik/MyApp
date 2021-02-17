import React from "react";

const GetServer = async (site, info) => {
  return new Promise((resolve, reject) =>
    fetch(`http://141.223.149.91:8381/${site}${encode(info)}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
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
