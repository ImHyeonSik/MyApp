import React from "react";
import { getStorage } from "../storage/StorageSpace";

const PostServer = async (site, info) => {
  const value = await getStorage('server')
  return new Promise((resolve, reject) =>
    fetch(`서버주소/${site}`, {
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
