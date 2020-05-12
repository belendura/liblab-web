import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as LibLabLogo } from "../../assets/heart-logo.svg";
import { ReactComponent as InstagramLogo } from "../../assets/camera-logo.svg";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  margin-top: 20px;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;
export const LibLabIcon = styled(LibLabLogo)`
  height: 40px;
`;

export const HeaderLogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 10px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;
export const HeaderShopContainer = styled.div`
  width: 30%;
  margin: 0 20px;
  display: flex;
`;
export const HeaderShopLink = styled(Link)`
  padding: 20px;
`;

export const HeaderInstagramLink = styled(Link)`
  margin-left: auto;
  padding: 10px;
  cursor: pointer;
`;

export const InstagramIcon = styled(InstagramLogo)`
  height: 40px;
`;

export const HeaderUserContainer = styled.div`
  margin-left: auto;
  width: 20%;
  display: flex;
`;
export const HeaderUserLink = styled(Link)`
  padding: 10px;
`;
