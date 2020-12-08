import React from "react";

import {
  Container,
  TopContainer,
  SectionsContainer,
  SectionTitle,
  SectionItem,
  CopyRightContainer,
  CopyRight,
  Line,
  BottomContainer,
  SocialMediaContainer,
  TwitterMenu,
  InstagramMenu,
  FacebookMenu,
  PinterestMenu,
  LanguageContainer,
} from "./footer.styles";
const Footer = () => {
  return (
    <Container>
      <TopContainer>
        <SectionsContainer>
          <SectionTitle>Company</SectionTitle>
          <SectionItem to="/pages/about us">About us</SectionItem>
          <SectionItem to="/pages/contact"> Contact & FAQ's</SectionItem>
          <SectionItem to="/pages/mobile-app">Mobile App</SectionItem>
          <SectionItem to="/pages/site-map">Sitemap</SectionItem>
        </SectionsContainer>
        <SectionsContainer>
          <SectionTitle>Policy</SectionTitle>
          <SectionItem to="/pages/terms-and-conditions">
            Terms & Conditions
          </SectionItem>
          <SectionItem to="/pages/privacy-policy">Privacy Policy</SectionItem>
        </SectionsContainer>
        <SectionsContainer>
          <SectionTitle>Account</SectionTitle>
          <SectionItem to="/login">Login</SectionItem>
          <SectionItem to="/pages/my-orders">My orders</SectionItem>
        </SectionsContainer>
        <SectionsContainer>
          <SectionTitle>Customer Service</SectionTitle>
          <SectionItem to="/pages/shipping">Shipping</SectionItem>
          <SectionItem to="/pages/returns-and-exchanges">
            Returns and Exchanges
          </SectionItem>
        </SectionsContainer>
      </TopContainer>
      <Line />
      <BottomContainer>
        <CopyRightContainer>
          <CopyRight>
            &copy; 2020 Lib-Lab Company, Inc. All Rights Reserved.
          </CopyRight>
        </CopyRightContainer>
        <SocialMediaContainer>
          <TwitterMenu />
          <FacebookMenu />
          <InstagramMenu />
          <PinterestMenu />
        </SocialMediaContainer>

        <LanguageContainer>
          <div>ESP</div>
        </LanguageContainer>
      </BottomContainer>
    </Container>
  );
};

export default Footer;
