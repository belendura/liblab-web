import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 10px;
  z-index: 5;
  ${"" /* border: thin solid black; */}
`;

export const CollectionsContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  ${"" /* border: thin solid black; */}
`;

export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  ${"" /* border: thin solid green; */}
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

  &:hover {
    color: gold;
  }
`;

export const CollectionOverviewContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  ${"" /* border: thin solid black; */}
`;
