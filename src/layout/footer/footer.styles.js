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

export const Container = styled.div`
  max-width: 997px;
  height: 300px;

  /* background-image: url(https://firebasestorage.googleapis.com/v0/b/liblab-web.appspot.com/o/Backgrounds%2FZEBRA_~1.PNG?alt=media&token=f0d516a8-da48-4a47-814f-6dc5daafff3b);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
    opacity: 0.5; */
  background: rgba(107, 111, 115, 0.4);
  margin: auto;
  display: flex;
`;

export const FooterContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const TopContainer = styled.div`
  display: flex;
`;

export const BottomContainer = styled.div`
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

export const Line = styled.hr`
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

export const TwitterMenu = styled(TwitterLogo)`
  ${SocialMediaStyles}
`;

export const FacebookMenu = styled(FacebookLogo)`
  ${SocialMediaStyles}
`;

export const InstagramMenu = styled(InstagramLogo)`
  ${SocialMediaStyles}
`;
export const PinterestMenu = styled(PinterestLogo)`
  ${SocialMediaStyles};
`;

export const LanguageContainer = styled.div`
  width: 30vw;
  padding: 10px;
  margin: 0 auto;
  border: 1px dotted black;
`;

export const CopyRightContainer = styled.div`
  padding: 10px;
  border: 1px dotted black;
  margin: 0 auto;
`;

export const CopyRight = styled.span`
  font-size: 10px;
  color: white;
  padding: 10px;
`;
