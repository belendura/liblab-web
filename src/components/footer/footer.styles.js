import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  height: 300px;
  background-color: #669999;
  border: 1px dotted black;
  margin: 0 auto;
  display: flex;
`;

export const SectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 20px auto;
`;

export const SectionTitle = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  padding: 10px;
`;

export const SectionItem = styled(Link)`
  font-size: 12px;
  cursor: pointer;
  padding: 10px;
  color: white;

  &:hover {
    color: gold;
  }
`;
