import React from "react";

const PostServer = async (site, info) => {
  return new Promise((resolve, reject) =>
    fetch(`http://141.223.149.91:8381/${site}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1MCIsImV4cCI6MTYxNjU3MjUwMn0.HAobC97RIj7fGQeZKVvRGz7DKyQ4gJOSMabxjDAIHnfkM4AEYkX0YSjbcm3JOtSbIvgRac2yfEaLCGUx8van2w',
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
