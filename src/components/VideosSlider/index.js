import React from "react";
import { useState } from "react";
import VideoItem from "../VideoItem";
import { VideosContainer, StyledSlider } from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "../Modal";
import settings from "./sliderSetting";
import { CSSTransition } from "react-transition-group";

const VideosSlider = ({ videos }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <VideosContainer>
        <StyledSlider {...settings}>
          {videos.map((video) => {
            return (
              <VideoItem
                setSelectedVideo={setSelectedVideo}
                setModalIsOpen={setModalIsOpen}
                video={video}
                key={video.id}
              />
            );
          })}
        </StyledSlider>
      </VideosContainer>
      <CSSTransition
        in={modalIsOpen}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        <Modal
          video={selectedVideo}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
      </CSSTransition>
    </>
  );
};

export default VideosSlider;
