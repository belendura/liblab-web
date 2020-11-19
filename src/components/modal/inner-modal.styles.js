import styled, { css } from "styled-components";
import { ReactComponent as CloseLogo } from "../../assets/icons/close-logo.svg";

// const BigStyle = css`
//   margin: 20px;
//   z-index: 20;
// `;

// const StandardStyle = css`
//   margin: 10px;
// `;

// const getCloseButtonStyles = (props) => {
//   return props.style === "big" ? BigStyle : StandardStyle;
// };

export const OuterContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  width: auto;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 5px 10px 18px #888888;
  border: 1px solid black;
  border-radius: 2px;
  padding: 10px 20px;
`;

export const CloseButton = styled(CloseLogo)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 14px;

  cursor: pointer;
  ${"" /* ${getCloseButtonStyles} */}
  ${"" /* border: thin solid black; */}
`;
