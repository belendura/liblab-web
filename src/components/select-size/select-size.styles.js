import styled from "styled-components";
import { ReactComponent as ArrowDownLogo } from "../../assets/icons/arrow-down.svg";
import { ReactComponent as ArrowUpLogo } from "../../assets/icons/arrow-up.svg";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border: thin solid grey;
`;

export const SizeOption = styled.input`
  border: none;
  font-size: 10px;
  padding: 10px 5px;

  &:hover,
  &:focus {
    border: none;
  }
`;

export const ArrowDown = styled(ArrowDownLogo)`
  width: 8px;
  margin-right: 10px;
  cursor: pointer;
`;

export const ArrowUp = styled(ArrowUpLogo)`
  width: 8px;
  margin-right: 10px;
  cursor: pointer;
`;
