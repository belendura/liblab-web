import styled from "styled-components";
import { ReactComponent as OrderLogo } from "../../../assets/icons/arrow-down.svg";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  height: 100%;
  padding: 5px;
  ${"" /* border: thin solid black; */}
`;

export const OrderOption = styled.span`
  font-size: 10px;
  margin-right: 10px;
`;

export const Arrow = styled(OrderLogo)`
  width: 10px;
  ${"" /* border: thin solid blue; */}
`;
