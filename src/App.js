import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import VideoList from "./components/VideoList/VideoList";
import { useState } from "react";
import VideoPlayback from "./components/VideoPlayback/VideoPlayback";
import { getVideosList } from "./service/service";

const defaultData = {
  videos: [],
  pageToken: "",
  pageSize: 50,
  totalResults: 0,
  query: "",
};

const App = () => {
  const [data, setData] = useState(defaultData);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isPageLoading, setIsPageLoading] = useState(false);

  // Single funtion to handle new search or load more search
  // Use loadMore param to decide whether to append to the data
  // execute returns a promise that can be used to handle the UI
  const getYouTubeData = (query="", loadMore=false) => {
    if(currentVideo && !loadMore) {
      setCurrentVideo(null)
    }

    if(!loadMore && data?.videos?.length > 0) {
      setData({...data, videos: []})
    }
    setIsPageLoading(true);
    const { pageSize, pageToken } = data;
    getVideosList({ query, pageToken, pageSize })
      .then((responseObject) => {
        const { videos, pageToken, pageSize, totalResults } = responseObject;
        setIsPageLoading(false);
        let updatedVideos = [];
        if (loadMore) {
          updatedVideos = [...data?.videos];
          updatedVideos = [...updatedVideos, ...videos];
        } else {
          updatedVideos = videos;
        }
        setData({
          videos: updatedVideos,
          pageToken: pageToken,
          pageSize: pageSize,
          totalResults: totalResults,
          query: query,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Clicking on video, try to scroll up to windows incase user has scrolled down
  const currentVideoSelected = (videoSelected) => {
    setCurrentVideo(videoSelected);
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <Searchbar searchChangeHandler={(text) => getYouTubeData(text)} />
      {isPageLoading && data?.videos?.length === 0 && <span>Loading...</span>}
      <div className="playback-list-container">
        {!!currentVideo && (
          <VideoPlayback video={currentVideo} />
        )}
        {data?.videos?.length > 0 && (
          <VideoList
            selectedVideo={currentVideo}
            totalResults={data?.totalResults}
            isPageLoading={isPageLoading}
            onSelectVideo={currentVideoSelected}
            videos={data?.videos}
            loadMore={() => getYouTubeData(data?.query, true)}
          />
        )}
      </div>
    </div>
  );
};

export default App;
