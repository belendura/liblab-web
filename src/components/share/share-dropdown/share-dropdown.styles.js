import styled, { css } from "styled-components";
import { ReactComponent as EmailLogo } from "../../../assets/icons/email-logo.svg";
import { ReactComponent as FacebookLogo } from "../../../assets/icons/facebook-logo.svg";
import { ReactComponent as PinterestLogo } from "../../../assets/icons/pinterest.svg";
import { ReactComponent as WhatsAppLogo } from "../../../assets/icons/whatsapp.svg";

const SocialMediaStyles = css`
  width: 10%;
  height: 18px;
  cursor: pointer;
  ${"" /* border: thin solid black; */}

  &:hover,
  &:focus {
    fill: gold;
  }
`;

const getSocialMediaStyles = () => {
  return SocialMediaStyles;
};

export const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 40px;
  display: flex;
  background-color: white;
  justify-content: flex-start;
  align-items: flex-end;
  z-index: 5;
  ${"" /* border: thin solid black; */}
`;

export const EmailMenu = styled(EmailLogo)`
  ${getSocialMediaStyles}
`;

export const PinterestMenu = styled(PinterestLogo)`
  ${getSocialMediaStyles}
`;

export const WhatsAppMenu = styled(WhatsAppLogo)`
  ${getSocialMediaStyles}
`;

export const FacebookMenu = styled(FacebookLogo)`
  ${getSocialMediaStyles}
`;
