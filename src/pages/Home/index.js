import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideosSlider from "../../components/VideosSlider";
import { getVideosList } from "../../redux/App/actions";
const Home = () => {
  const appState = useSelector((state) => state.AppReducer);
  const dispatch = useDispatch();

  const videos = appState.videosList;
  // useEffect(() => {
  //   dispatch(getVideosList());
  // }, []);

  return <>{videos && <VideosSlider videos={videos} />}</>;
};

export default Home;
