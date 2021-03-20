import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const SmallTitle = css`
  font-size: 20px;
`;

const LargeTitle = css`
  font-size: 40px;
`;

const getTitleSize = (props) => {
  return props.size === "large" ? LargeTitle : SmallTitle;
};

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 10px;
  ${"" /* border: thin solid black; */}
`;

export const PictureContainer = styled.div`
  position: relative;
  height: 0;
  padding-top: 128.28%;
  overflow: hidden;
  text-align: center;
`;

export const Picture = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled(Link)`
  position: absolute;
  top: 50%;
  left: 0;
  margin: 0;
  transform: translate(0, -50%);
  width: 100%;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  ${getTitleSize}
  &:hover {
    color: gold;
    text-decoration-line: underline;
  }
`;
