import styled from "styled-components";
import Slider from "react-slick/lib/slider";

export const VideosContainer = styled.div`
`;

export const StyledSlider = styled(Slider)`
  .slick-prev,
  .slick-next {
    display: none !important;
  }

  .slick-slide > div {
    padding: 9px;
  }
`;
