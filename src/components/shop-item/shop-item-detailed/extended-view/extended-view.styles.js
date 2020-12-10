import styled, { css } from "styled-components";

import { ReactComponent as ArrowLeftLogo } from "../../../../assets/icons/arrow-left.svg";
import { ReactComponent as ArrowRightLogo } from "../../../../assets/icons/arrow-right.svg";

const displayedPicture = css`
  opacity: 1;
  box-shadow: 1px 2px 3px #888888;
`;

const hiddenPicture = css`
  opacity: 0.4;
`;

const getPictureStyles = (props) => {
  const { index, displayedView } = props;
  return displayedView === index ? displayedPicture : hiddenPicture;
};

export const Container = styled.div`
  position: relative;
  width: 1017px;
  height: 100vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    /*Hide scrollbar for Chrome, Safari and Opera*/
    display: none;
  }
  ::-ms-overflow-style: none; /* IE and Edge */
  ::scrollbar-width: none; /* Firefox */
  cursor: zoom-out;
  margin: 0 auto;
`;

export const PictureContainer = styled.div`
  position: relative;
  height: 0;
  padding-top: 160.45%;
  overflow: hidden;
`;

export const Picture = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: contain;
`;

export const ArrowLeft = styled(ArrowLeftLogo)`
  position: absolute;
  top: 50%;
  left: 10px;
  height: 10px;

  cursor: pointer;
  z-index: 10;

  &:hover,
  &:focus {
    fill: gold;
  }
`;

export const ArrowRight = styled(ArrowRightLogo)`
  position: absolute;
  top: 50%;
  right: 10px;
  height: 10px;
  cursor: pointer;
  z-index: 10;

  &:hover,
  &:focus {
    fill: gold;
  }
`;

export const Carousel = styled.div`
  position: absolute;
  top: 10%;
  left: 5%;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CarouselPictureContainer = styled.div`
  position: relative;
  height: 0;
  padding-top: 128.28%;
  overflow: hidden;
  margin-bottom: 5px;
  cursor: pointer;
`;

export const CarouselPicture = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${getPictureStyles};

  &:hover,
  &:focus {
    opacity: 1;
  }
`;
