import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const SmallSizeContainer = css`
  width: 20vw;
  height: auto;
`;

const SmallSizeTitle = css`
  font-size: 16px;
`;

const LargeSizeContainer = css`
  width: 25%;
  height: 100%;
`;

const LargeSizeTitle = css`
  font-size: 20px;
`;

const getContainerStyles = (props) => {
  switch (props.size) {
    case "small":
      return SmallSizeContainer;

    case "large":
      return LargeSizeContainer;
    default:
      return LargeSizeContainer;
  }
};

const getTitleStyles = (props) => {
  switch (props.size) {
    case "small":
      return SmallSizeTitle;

    case "large":
      return LargeSizeTitle;
    default:
      return LargeSizeTitle;
  }
};

export const Container = styled.div`
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  ${"" /* padding-top: 66.55%;
  height: 0;
  overflow: hidden; */}

  ${getContainerStyles}
`;

export const Title = styled(Link)`
  color: white;
  font-size: 20px;
  font-weight: bold;

  text-transform: uppercase;

  &:hover {
    color: gold;
    text-decoration-line: underline;
  }

  ${getTitleStyles}
`;
