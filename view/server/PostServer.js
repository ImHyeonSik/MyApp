import React from "react";
import { getStorage } from "../storage/StorageSpace";

const PostServer = async (site, info) => {
  const value = await getStorage('server')
  return new Promise((resolve, reject) =>
    fetch(`http://141.223.149.91:8381/${site}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': value,
      },
      body: JSON.stringify(
        info
      )
    }).then(r => {
      resolve(r)
    })
  )

};
export default PostServer
