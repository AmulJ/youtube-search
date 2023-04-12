import React from "react";
import VideoDescription from "../VideoDescription/VideoDescription";
import "./VideoItem.css";

const VideoItem = ({ style, video, onSelectVideo }) => {
  const imageUrl = video?.snippet?.thumbnails?.default?.url;

  return (
    <div
      style={style}
      onClick={() => onSelectVideo(video)}
      className="list-group-item"
      aria-label="list-group-item"
    >
      <div className="video-list">
        <div className="img-container">
          <img aria-label="video-thumbnail" alt={video?.snippet?.title} src={imageUrl} />
        </div>
        <VideoDescription video={video}/>
      </div>
    </div>
  );
};

export default VideoItem;
