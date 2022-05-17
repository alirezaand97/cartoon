import React, { useState } from "react";
import { VideoCard, VideoTitle, Duration } from "./style";
import converSecondsToTime from "../../utils/converSecondsToTime";
import convertToPersianDigit from "../../utils/convertToPersianDigit";
const VideoItem = ({ video, setSelectedVideo ,setModalIsOpen}) => {
  const handleSelectVideo=()=>{
    setModalIsOpen(true);
    setSelectedVideo(video);
  }
  return (
    <>
      <VideoCard
        cover={video.main_poster_url}
        onClick={handleSelectVideo}
      >
        <Duration>
          {convertToPersianDigit(converSecondsToTime(video.duration))}
        </Duration>
        <VideoTitle>{video.title}</VideoTitle>
      </VideoCard>
    </>
  );
};

export default VideoItem;
