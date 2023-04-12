import React from "react";
import VideoDescription from "../VideoDescription/VideoDescription";
import "./VideoPlayback.css";

const embedUrl = "https://www.youtube.com/embed/";

const VideoPlayback = ({ video }) => {
  const videoId = video?.id?.videoId;
  const url = `${embedUrl}${videoId}`;

  return (
    <div aria-label="playback" className="playback">
      <div className="playback-container">
        <iframe
          title={video?.snippet?.title}
          className="playback-frame"
          src={url}
        ></iframe>
      </div>

      <VideoDescription video={video}/>
    </div>
  );
};

export default VideoPlayback;
