import React from "react";

import {
  FooterContainer,
  FooterTopContainer,
  SectionsContainer,
  SectionTitle,
  SectionItem,
  FooterCopyRightContainer,
  FooterCopyRight,
  FooterBottomLine,
  FooterBottomContainer,
  SocialMediaContainer,
  TwitterLogoStyled,
  InstagramLogoStyled,
  FacebookLogoStyled,
  PinterestLogoStyled,
  LanguageContainer,
} from "./footer.styles";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterTopContainer>
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
      </FooterTopContainer>
      <FooterBottomLine />
      <FooterBottomContainer>
        <FooterCopyRightContainer>
          <FooterCopyRight>
            &copy; 2020 Lib-Lab Company, Inc. All Rights Reserved.
          </FooterCopyRight>
        </FooterCopyRightContainer>
        <SocialMediaContainer>
          <TwitterLogoStyled />
          <FacebookLogoStyled />
          <InstagramLogoStyled />
          <PinterestLogoStyled />
        </SocialMediaContainer>

        <LanguageContainer>
          <div>ESP</div>
        </LanguageContainer>
      </FooterBottomContainer>
    </FooterContainer>
  );
};

export default Footer;
