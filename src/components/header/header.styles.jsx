import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as LibLabLogo } from "../../assets/heart-logo.svg";
import { ReactComponent as InstagramLogo } from "../../assets/camera-logo.svg";
import { ReactComponent as SearchLogo } from "../../assets/search-logo.svg";
import { ReactComponent as UserLogo } from "../../assets/user-logo.svg";
import { ReactComponent as CloseLogo } from "../../assets/close-logo.svg";

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

export const HeaderLogoContainer = styled(Link)`
  width: 80px;
  padding: 10px;
  border: 2px black dotted;
  margin-right: 20px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const LibLabIcon = styled(LibLabLogo)`
  height: 60px;
`;

export const HeaderShopContainer = styled.div`
  width: 30%;
  display: flex;
  border: 2px black dotted;
`;

export const HeaderShopLink = styled(Link)`
  padding: 25px;
  cursor: pointer;

  &:hover {
    color: gold;
  }
`;

export const InstagramIcon = styled(InstagramLogo)`
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
  border: 2px black dotted;
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

export const CloseIcon = styled(CloseLogo)`
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
