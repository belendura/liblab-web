import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as TwitterLogo } from "../../assets/social-media/twitter.svg";
import { ReactComponent as FacebookLogo } from "../../assets/social-media/facebook.svg";
import { ReactComponent as InstagramLogo } from "../../assets/social-media/instagram.svg";
import { ReactComponent as PinterestLogo } from "../../assets/social-media/pinterest.svg";

const SocialMediaStyles = css`
  border: 1px dotted black;
  width: 20px;
  cursor: pointer;
  fill: white;
  margin: 10px;

  &:hover {
    fill: gold;
  }
`;

export const FooterContainer = styled.div`
  height: 300px;
  background-color: #669999;
  border: 1px dotted black;
  margin: 0 auto;
`;

export const FooterTopContainer = styled.div`
  display: flex;
`;

export const FooterBottomContainer = styled.div`
  display: flex;
`;
export const SectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px auto;
`;

export const SectionTitle = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  padding: 10px;
`;

export const SectionItem = styled(Link)`
  font-size: 12px;
  cursor: pointer;
  padding: 10px;
  color: white;

  &:hover {
    color: gold;
  }
`;

export const FooterBottomLine = styled.hr`
  border-top: 2px solid white;
  margin: 0 5px;
`;

export const SocialMediaContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border: 1px dotted black;
  margin: 0 auto;
`;

export const TwitterLogoStyled = styled(TwitterLogo)`
  ${SocialMediaStyles}
`;

export const FacebookLogoStyled = styled(FacebookLogo)`
  ${SocialMediaStyles}
`;

export const InstagramLogoStyled = styled(InstagramLogo)`
  ${SocialMediaStyles}
`;
export const PinterestLogoStyled = styled(PinterestLogo)`
  ${SocialMediaStyles};
`;

export const LanguageContainer = styled.div`
  width: 30vw;
  padding: 10px;
  margin: 0 auto;
  border: 1px dotted black;
`;

export const FooterCopyRightContainer = styled.div`
  padding: 10px;
  border: 1px dotted black;
  margin: 0 auto;
`;

export const FooterCopyRight = styled.span`
  font-size: 10px;
  color: white;
  padding: 10px;
`;
