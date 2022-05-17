import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 170px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 32px;
  align-items: center;
  height: 100%;
`;
export const ProfileButton = styled.div`
  width: 72px;
  height: 72px;
  display: flex;
  align-items: end;
  justify-content: center;
  background: #ccb4d7;
  border-radius: 50%;
  cursor: pointer;
`;
export const ProfileImage = styled.img`
width: 52px;
height: 52px;
display: block;
margin-bottom: 4px;
`;
export const HeaderRightSide = styled.div`
  display: flex;
  align-items: center;
`;
export const SerachButton = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 21px;
  background: linear-gradient(140deg, #7c70ff, #5a4dff);
  box-shadow: 0px 5px 0px 0px #7c70ff;
  margin: 0 12px;
  cursor: pointer;
`;
export const BackButton = styled.div`
  width: 64px;
  height: 64px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 21px;
  background: transparent;
  box-shadow: 0px 5px 0px 0px rgb(198 195 195 / 50%);
  margin: 0 12px;
  border: 1px solid rgb(138 138 138 / 50%);
  cursor: pointer;
`;
export const HeaderBtnIcon = styled.img`
  width: 32px;
  height: 32px;
`;
