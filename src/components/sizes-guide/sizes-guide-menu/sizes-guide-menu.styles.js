import styled from "styled-components";

import { ReactComponent as HangerLogo } from "../../../assets/icons/hanger.svg";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${"" /* border: thin solid black; */}
`;

export const Hanger = styled(HangerLogo)`
  width: 25px;
  height: auto;
  cursor: pointer;
  margin-right: 10px;
  ${"" /* border: thin solid black; */}

  &:hover {
    fill: gold;
  }
`;

export const Title = styled.span`
  font-size: 10px;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: gold;
  }
`;
