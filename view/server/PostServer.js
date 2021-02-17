import React from "react";

const PostServer = async (site, info) => {
  return new Promise((resolve, reject) =>
    fetch(`http://141.223.149.91:8381/${site}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': '',
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
