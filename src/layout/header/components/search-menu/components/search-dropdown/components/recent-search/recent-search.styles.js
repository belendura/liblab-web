import styled from "styled-components";
import { ReactComponent as CloseLogo } from "../../../../../../../../assets/icons/close-logo.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(215, 206, 179, 0.2);
  padding: 5px;
  margin: 5px;
`;

export const Text = styled.span`
  font-size: 10px;
  margin-right: 5px;
`;

export const Close = styled(CloseLogo)`
  width: 7.5px;
  cursor: pointer;
`;
