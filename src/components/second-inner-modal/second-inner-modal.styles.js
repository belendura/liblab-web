import styled, { css } from "styled-components";
import { ReactComponent as CloseLogo } from "../../assets/icons/close-logo.svg";

const BigCloseStyle = css`
  width: 20px;
`;

const getCloseButtonStyles = (props) => {
  return props.closeStyle === "big" ? BigCloseStyle : null;
};

export const OuterContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 25;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 5px 10px 18px #888888;
`;

export const CloseButton = styled(CloseLogo)`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 10px;
  cursor: pointer;
  z-index: 25;
{getCloseButtonStyles};
`;
