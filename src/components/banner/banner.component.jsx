import React from "react";

import {
  BannerContainer,
  MainBannerText,
  BannerText,
} from "./banner.styles.js";

const Banner = () => {
  return (
    <BannerContainer>
      <MainBannerText>Free shipping to store. </MainBannerText>
      <BannerText>At home from € 50.</BannerText>
    </BannerContainer>
  );
};

export default Banner;
