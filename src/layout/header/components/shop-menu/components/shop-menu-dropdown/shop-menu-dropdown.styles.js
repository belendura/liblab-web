import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const SaleStyles = css`
  color: red;
`;
const NewStyles = css`
  font-weight: bold;
`;
const getSectionLinkStyles = (props) => {
  if (props.section === "sale") return SaleStyles;
  return props.section === "new" ? NewStyles : null;
};

export const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 10px;
  z-index: 10;
  ${"" /* border: thin solid black; */}
`;

export const CollectionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  ${"" /* border: thin solid black; */}
`;

export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  ${"" /* border: thin solid black; */}
`;

export const CollectionLink = styled(Link)`
  font-weight: bold;
  font-size: 12px;
  padding: 10px 0;
  text-transform: uppercase;
  &:hover {
    color: gold;
  }
`;

export const SectionLink = styled(Link)`
  font-size: 12px;
  padding: 5px 0;
  text-transform: capitalize;
  ${getSectionLinkStyles}

  &:hover {
    color: gold;
  }
`;

export const CollectionOverviewContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  ${"" /* border: thin solid black; */}
`;
