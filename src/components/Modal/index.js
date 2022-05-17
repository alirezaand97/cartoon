import React, { useState } from "react";
import {
  CenterBox,
  DarkBG,
  StyledModal,
  VideoBanner,
  Title,
  ModalContent,
  CloseIcon,
  ActionBox,
  ActionIcon,
  FavText,
  SubmitButton,
} from "./style";
import "./styles.css";

const Modal = ({ modalIsOpen, setModalIsOpen, video }) => {
  const [liked, setLiked] = useState(false);
  const [disLiked, setDisLiked] = useState(false);
  const [submitActive, setSubmitActive] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setDisLiked(false);
    liked ? setSubmitActive(false) : setSubmitActive(true);
  };

  const handleDisLike = () => {
    setDisLiked(!disLiked);
    setLiked(false);
    disLiked ? setSubmitActive(false) : setSubmitActive(true);
  };

  const handelSubmit = () => {
    if (submitActive) setModalIsOpen(false);
  };
  return (

        <CenterBox>
          <DarkBG onClick={()=>setModalIsOpen(false)} />
          <StyledModal>
            <VideoBanner src={video?.main_poster_url} />
            <ModalContent>
              <Title>انیمیشن {video?.title} رو چقد دوست داشتی؟</Title>
              <ActionBox>
                <div  onClick={handleDisLike}>
                  <ActionIcon
                    src={
                      disLiked
                        ? "icons/dislike-select.svg"
                        : "icons/dislike.svg"
                    }
                   
                  />
                  <FavText className={disLiked ? "dislikeSelected" : ""}>
                    کم
                  </FavText>
                </div>

                <div onClick={handleLike}>
                  <ActionIcon
                    src={liked ? "icons/like-select.svg" : "icons/like.svg"}
                    
                  />
                  <FavText className={liked ? "likeSelected" : ""} >
                    زیاد
                  </FavText>
                </div>
              </ActionBox>

              <SubmitButton
                className={submitActive ? "submitActive" : ""}
                onClick={handelSubmit}
              >
                همینه
              </SubmitButton>
            </ModalContent>
          </StyledModal>
          <CloseIcon
            src="icons/close.svg"
            onClick={() => setModalIsOpen(false)}
          />
        </CenterBox>
     
  );
};

export default Modal;
