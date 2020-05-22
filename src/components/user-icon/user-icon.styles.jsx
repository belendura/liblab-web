import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as UserLogo } from "../../assets/user-logo.svg";

export const UserIconContainer = styled.div`
  width: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const UserLink = styled(Link)`
  width: 40px;
`;

export const User = styled(UserLogo)`
  width: 35px;
`;
