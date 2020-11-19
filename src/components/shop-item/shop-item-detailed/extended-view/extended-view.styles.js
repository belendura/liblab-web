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
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
`;

export const Picture = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  padding-top: 100%;
  object-fit: cover;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ArrowLeft = styled(ArrowLeftLogo)`
  position: absolute;
  top: 50%;
  left: 10px;
  height: 20px;

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
  height: 20px;
  cursor: pointer;
  z-index: 10;

  &:hover,
  &:focus {
    fill: gold;
  }
`;

export const CarouselContainer = styled.div`
  position: absolute;
  top: 5%;
  left: 50px;
  width: 4vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${"" /* border: thin solid black; */}
`;

export const CarouselPic = styled.img`
  width: 100%;
  height: 0;
  padding-top: 10%;
  object-fit: cover;
  height: auto;
  margin: 2px auto;
  cursor: pointer;
  ${getPictureStyles}
  ${"" /* border:thin solid black; */}

  &:hover,
  &:focus {
    opacity: 1;
  }
`;
