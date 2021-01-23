import styled from "styled-components";
import { animated } from "react-spring";
import { ReactComponent as InstagramLogo } from "../../../../assets/icons/camera-logo.svg";

export const Instagram = styled(animated(InstagramLogo))`
  height: 100%;
  padding: 15px 5px;
  cursor: pointer;
`;
