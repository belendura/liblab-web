import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const SmallSizeContainer = css`
  width: 180px;
`;

const SmallSizeTitle = css`
  font-size: 16px;
`;

const LargeSizeContainer = css`
  height: 250px;
  width: 180px;
`;

const LargeSizeTitle = css`
  font-size: 20px;
`;

const getCollectionOverviewContainerStyles = (props) => {
  switch (props.size) {
    case "small":
      return SmallSizeContainer;

    case "large":
      return LargeSizeContainer;
    default:
      return LargeSizeContainer;
  }
};

const getCollectionOverviewTitleStyles = (props) => {
  switch (props.size) {
    case "small":
      return SmallSizeTitle;

    case "large":
      return LargeSizeTitle;
    default:
      return LargeSizeTitle;
  }
};
export const CollectionOverviewContainer = styled.div`
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 250px;
  width: 180px;
  margin: 15px;
  border: 1px dotted red;
  display: flex;
  justify-content: center;
  align-items: center;

  ${getCollectionOverviewContainerStyles}
`;

export const Title = styled(Link)`
  color: white;
  font-size: 20px;
  font-weight: bold;
  bottom: 30px;
  text-transform: uppercase;

  ${getCollectionOverviewTitleStyles}
`;
