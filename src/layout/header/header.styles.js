import styled from "styled-components";
import { ReactComponent as LibLabLogo } from "../../assets/icons/lab.svg";
import { ReactComponent as SearchLogo } from "../../assets/icons/search-logo.svg";
import { ReactComponent as UserLogo } from "../../assets/icons/user.svg";
import { ReactComponent as CloseLogo } from "../../assets/icons/close-logo.svg";

export const Container = styled.div`
  position: sticky;
  top: 0;
  height: 50px;
  max-width: 997px;
  margin: auto;
  background-color: white;
  z-index: 10;
`;

export const NavContainer = styled.nav`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 800px) {
    font-size: 0.8em;
  }
`;

export const HeaderContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const LibLab = styled(LibLabLogo)`
  height: 100%;
  cursor: pointer;
  padding: 5px 0;
  &:hover,
  &:focus {
    fill: gold;
  }
`;

export const ShopContainer = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 5px;
  list-style: none;
`;

export const UserContainer = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 5px;
  list-style: none;
`;

export const UserLinkContainer = styled.li`
  height: 100%;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export const Search = styled(SearchLogo)`
  height: 100%;
  cursor: pointer;

  &:hover {
    fill: gold;
  }
`;

export const Close = styled(CloseLogo)`
  height: 100%;
  padding: 5px;
  cursor: pointer;

  &:hover {
    fill: gold;
  }
`;

export const User = styled(UserLogo)`
  height: 100%;
  cursor: pointer;

  &:hover {
    fill: gold;
  }
`;

export const UserLogged = styled.span`
  height: 100%;
  cursor: pointer;

  &:hover {
    color: gold;
  }
`;
