/*
  It is recommended that .env file is not uploaded, in case .evn file is missing,
  make use of following to quickly run the app
  
  REACT_APP_API_KEY = "<ADD_API_KEY>"
  REACT_APP_BASE_URL = "https://www.googleapis.com/youtube/v3/search?"
*/
const YT_API_KEY = process.env.REACT_APP_API_KEY;
const YT_BASE_URL = process.env.REACT_APP_BASE_URL;

export const getVideosList = ({ query, pageToken, pageSize }) => {
  return new Promise((resolve, reject)=>{
    let requestObject = {
      part: ["snippet"],
      maxResults: pageSize,
      q: query,
      key: YT_API_KEY
    };
  
    // Append pageToken to requst only if there is a loadmore request
    if (pageToken) {
      requestObject = { ...requestObject, pageToken: pageToken };
    }

    fetch(`${YT_BASE_URL}${new URLSearchParams(requestObject)}`).then((response)=>{
      return response.json()
    })
    .then((res)=>{
      resolve({
        videos: res?.items,
        pageSize: res?.pageInfo?.resultsPerPage,
        pageToken: res?.nextPageToken,
        totalResults: res?.pageInfo?.totalResults,
      });
    })
    .catch((error)=>{
      reject(error)
    })
  }) 
}

