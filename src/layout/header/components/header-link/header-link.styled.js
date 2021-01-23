import styled from "styled-components";
import { Link } from "react-router-dom";
import { animated } from "react-spring";

export const LinkContainer = styled.li`
  height: 100%;
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  width: fit-content;
  justify-content: center;
  position: relative;
`;

export const ShopLink = styled(animated(Link))`
  font-size: 12px;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
`;

export const Underline = styled(animated.div)`
  height: 3px;
  position: absolute;
  bottom: 13px;
`;
