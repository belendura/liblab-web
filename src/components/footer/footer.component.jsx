import React from "react";

import {
  FooterContainer,
  SectionsContainer,
  SectionTitle,
  SectionItem,
} from "./footer.styles";
const Footer = () => {
  return (
    <FooterContainer>
      <SectionsContainer>
        <SectionTitle>Company</SectionTitle>
        <SectionItem>About us</SectionItem>
        <SectionItem>Contact & FAQ's</SectionItem>
        <SectionItem>Mobile App</SectionItem>
        <SectionItem>Sitemap</SectionItem>
      </SectionsContainer>
      <SectionsContainer>
        <SectionTitle>Policy</SectionTitle>
        <SectionItem>Terms & Conditions</SectionItem>
        <SectionItem>Privacy Policy</SectionItem>
      </SectionsContainer>
      <SectionsContainer>
        <SectionTitle>Account</SectionTitle>
        <SectionItem>Login</SectionItem>
        <SectionItem>My orders</SectionItem>
      </SectionsContainer>
      <SectionsContainer>
        <SectionTitle>Customer Service</SectionTitle>
        <SectionItem>Shipping</SectionItem>
        <SectionItem>Returns and Exchanges</SectionItem>
      </SectionsContainer>
    </FooterContainer>
  );
};

export default Footer;
