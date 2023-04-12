import { formatTime } from "../../utils/utils";
import "./VideoDescription.css"

const VideoDescription = ({ video }) => {
  return (
    <div className="text-container">
      <div aria-label="Video Title" className="video-title">{video.snippet.title}</div>
      <div className="video-description-container">
        <div aria-label="Video Channel Title" className="video-description">{video.snippet.channelTitle}</div>
        <div aria-label="Video Published" className="video-description">
          Published : {formatTime(video.snippet.publishTime)}
        </div>
      </div>
    </div>
  );
};

export default VideoDescription