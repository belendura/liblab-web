import styled from "styled-components";
import { ReactComponent as ArrowUp } from "../../../../assets/icons/arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../../../assets/icons/arrow-down.svg";

export const ItemDetailsContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const ItemDetailsHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemDetailsTitle = styled.span`
  color: grey;
`;

export const ItemDetailsText = styled.span`
  font-size: 12px;
  color: black;
`;

export const ItemDetailsArrowUP = styled(ArrowUp)`
  width: 20px;
  margin: 0 10px;
`;
export const ItemDetailsArrowDOWN = styled(ArrowDown)`
  width: 20px;
  margin: 0 10px;
`;
