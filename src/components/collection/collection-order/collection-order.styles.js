import styled from "styled-components";
import { ReactComponent as OrderLogo } from "../../../assets/icons/arrow-down.svg";

export const CollectionOrderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
  width: 15vw;
  margin: 10px;
  border: 1px dashed black;
`;

export const CollectionOrderText = styled.span`
  padding: 10px 0;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
`;

export const CollectionOrderIcon = styled(OrderLogo)`
  width: 20px;
  padding: 10px 0;
`;
