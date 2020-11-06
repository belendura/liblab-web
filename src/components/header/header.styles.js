import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as LibLabLogo } from "../../assets/icons/lab.svg";
import { ReactComponent as InstagramLogo } from "../../assets/icons/camera-logo.svg";
import { ReactComponent as SearchLogo } from "../../assets/icons/search-logo.svg";
import { ReactComponent as UserLogo } from "../../assets/icons/user-logo.svg";
import { ReactComponent as CloseLogo } from "../../assets/icons/close-logo.svg";

export const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  height: 50px;
  padding: 5px;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
  ${"" /* border: thin solid black; */}

  @media screen and (max-width: 800px) {
    font-size: 0.8em;
  }
`;

export const LibLabContainer = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${"" /* border: thin solid black; */}
`;

export const LibLab = styled(LibLabLogo)`
  width: 60px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    fill: gold;
  }
`;

export const ShopContainer = styled.ul`
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;

  ${"" /* border: thin solid black; */}

  @media screen and (max-width: 800px) {
    font-size: 0.8em;
  }
`;

export const LinkContainer = styled.li`
  font-size: 0.8rem;
  padding: 20px;
  ${"" /* border: thin solid purple; */}

  @media screen and (max-width: 800px) {
    margin: 0;
  }
`;

export const ShopLink = styled(Link)`
  cursor: pointer;
  &:hover {
    color: gold;
    text-decoration: underline;
  }
`;

export const Instagram = styled(InstagramLogo)`
  width: 45px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    fill: gold;
  }
`;

export const UserContainer = styled.ul`
  width: 30%;
  padding: 0 5px;
  display: flex;
  margin-left: auto;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  /*border: thin solid black;*/
`;

export const Search = styled(SearchLogo)`
  width: 45px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    fill: gold;
  }
`;

export const Close = styled(CloseLogo)`
  width: 45px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    fill: gold;
  }
`;

export const User = styled(UserLogo)`
  width: 45px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    fill: gold;
  }
`;

export const UserLogged = styled.span`
  width: 100%;
  cursor: pointer;

  &:hover {
    color: gold;
  }
`;
