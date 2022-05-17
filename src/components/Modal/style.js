import styled from "styled-components";

export const DarkBG = styled.div`
  background-color: rgba(0, 0, 0, 0.65);
  width: 100vw;
  height: 100vh;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  cursor: pointer;
`;

export const CenterBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 720px;
  height: 480px;
  max-width: calc(100vw - 32px);
`;

export const StyledModal = styled.div`
  width: 100%;
  height: 100%;
  background: #26244b;
  color: white;
  z-index: 10;
  border-radius: 42px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
`;

export const Actions = styled.div`
  position: absolute;
  bottom: 2px;
  margin-bottom: 10px;
  width: 100%;
`;

export const VideoBanner = styled.img`
  width: 240px;
  height: 140px;
  border-radius: 24px;
  position: absolute;
  top: -70px;
  left: 50%;
  transform: translateX(-50%);
  object-fit: fill;

  @media (max-width: 768px) {
    width: 190px;
    height: 100px;
    top: -50px;
  }
`;

export const Title = styled.div`
  margin: 0;
  padding: 10px;
  color: #fff;
  font-family: "YekanBakhBold";
  font-size: 1.35rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 98px;
`;

export const CloseIcon = styled.img`
  position: absolute;
  top: 32px;
  right: 32px;
  width: 36px;
  height: 36px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const ActionBox = styled.div`
  padding: 32px;
  width: 360px;
  display: flex;
  justify-content: space-around;
`;
export const ActionIcon = styled.img`
  width: 72px;
  height: 72px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 62px;
    height: 62px;
  }

`;

export const FavText = styled.div`
  color: #fff;
  font-family: "YekanBakhBold";
  font-size: 1.2rem;
  padding-top: 10px;
  text-align: center;
  cursor: pointer;

  &.dislikeSelected {
    color: #d95051 !important;
  }

  &.likeSelected {
    color: #97ddad !important;
  }
`;

export const SubmitButton = styled.button`
  outline: none;
  border: none;
  color: #fff;
  min-width: 90px;
  min-height: 32px;
  border-radius: 15px;
  padding: 8px 24px;
  font-size: 1.1rem;
  font-family: "YekanBakhBold";
  background: linear-gradient(120deg, #7c70ff, #5a4dff);
  box-shadow: 0px 3px 0px 0px #7c70ff;
  margin-top: 32px;
  opacity: 0.5;
  cursor: pointer;

  &.submitActive {
    opacity: 1 !important;
  }
`;
