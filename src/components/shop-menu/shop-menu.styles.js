import styled from "styled-components";
import { Link } from "react-router-dom";

export const ShopMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px red dashed;
`;

export const ShopLink = styled(Link)`
  height: 40px;
  margin-top: 25px;

  &:hover {
    color: gold;
  }
`;
