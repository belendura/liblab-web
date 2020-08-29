import styled from "styled-components";
import { ReactComponent as ArrowDownLogo } from "../../assets/icons/arrow-down.svg";
import { ReactComponent as ArrowUpLogo } from "../../assets/icons/arrow-up.svg";

export const SelectSizeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border: thin solid grey;
`;

export const SelectSizeOption = styled.input`
  border: none;
  padding: 10px;

  &:hover,
  &:focus {
    border: none;
  }
`;

export const SelectSizeArrowDown = styled(ArrowDownLogo)`
  width: 12px;
  margin: 0 10px;
  cursor: pointer;
`;

export const SelectSizeArrowUp = styled(ArrowUpLogo)`
  width: 12px;
  margin: 0 10px;
  cursor: pointer;
`;
