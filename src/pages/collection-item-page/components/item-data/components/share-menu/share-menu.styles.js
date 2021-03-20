import styled from "styled-components";
import { ReactComponent as ShareLogo } from "../../../../../../assets/icons/share.svg";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 15px 0;
  ${"" /* border: thin solid black; */}
`;

export const ShareContainer = styled(ShareLogo)`
  width: 10%;
  height: 20px;
  cursor: pointer;
  ${"" /* border: thin solid black; */}

  &:hover,
  &:focus {
    fill: gold;
  }
`;

export const Text = styled.span`
  font-size: 12px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: gold;
  }
`;
