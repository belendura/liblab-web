import styled from "styled-components";
import { Link } from "react-router-dom";

export const ShopLink = styled(Link)`
  font-size: 12px;
  text-transform: uppercase;
  margin: 0 5px;
  cursor: pointer;
  color: ${(props) => (props.item === "sale" ? "red" : "black")};

  &:hover {
    color: gold;
    text-decoration: underline;
  }
`;
