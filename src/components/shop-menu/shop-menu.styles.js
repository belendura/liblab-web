import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 10px;
`;

export const ShopLink = styled(Link)`
  &:hover {
    color: gold;
    text-decoration-line: underline;
  }
`;
