import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as LibLab_Logo } from "../../assets/icons/heart-logo.svg";
import { ReactComponent as InstagramLogo } from "../../assets/icons/camera-logo.svg";
import { ReactComponent as SearchLogo } from "../../assets/icons/search-logo.svg";
import { ReactComponent as UserLogo } from "../../assets/icons/user-logo.svg";
import { ReactComponent as CloseLogo } from "../../assets/icons/close-logo.svg";

export const HeaderContainer = styled.nav`
  width: 100%;
  display: flex;
  position: fixed;
  border: thin solid black;
  margin: 0;

   @media screen and (max-width: 600px) {
    padding: 0;
`;

export const HeaderLogoContainer = styled(Link)`
  width: 60%;
  padding: 10px;
  border: thin solid black;

  ${"" /* @media only screen and (max-width: 600px) {
    width: 50px;
    padding: 0;
  } */}
`;

export const LibLabLogo = styled(LibLab_Logo)`
  height: 60px;
`;

export const HeaderShopContainer = styled.div`
  width: 30%;
  display: flex;
  border: thin solid black;
`;

export const HeaderShopLink = styled(Link)`
  padding: 25px;
  cursor: pointer;

  &:hover {
    color: gold;
  }
`;

export const InstagramMenu = styled(InstagramLogo)`
  height: 40px;
  cursor: pointer;

  &:hover {
    fill: gold;
  }
`;

export const HeaderUserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  width: 30%;
  border: thin solid black;
`;

export const HeaderSearchContainer = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    fill: gold;
  }
`;

export const HeaderSearch = styled(SearchLogo)`
  height: 35px;
`;

export const CloseMenu = styled(CloseLogo)`
  height: 35px;
`;

export const HeaderUser = styled(UserLogo)`
  height: 35px;
  cursor: pointer;
  &:hover {
    fill: gold;
  }
`;

export const HeaderUserLogged = styled.span`
  cursor: pointer;
  &:hover {
    color: gold;
  }
`;
