import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  padding: 0 10px;
  background-color: white;
  border: thin solid black;
`;

export const CollectionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 10px;
  ${"" /* border: thin solid black; */}
`;

export const CollectionLink = styled(Link)`
  font-weight: bold;
  font-size: 10px;
  padding-bottom: 5px;
  text-transform: uppercase;

  &:hover {
    color: gold;
  }
`;

export const SectionLink = styled(Link)`
  font-size: 10px;
  padding-bottom: 5px;

  &:hover {
    color: gold;
  }
`;
