import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import UserMenu from "../../../../components/user-menu/user-menu.component";

import {Container} from "./user-purchases-page.styles"

const UserPurchasesPage = () => {

  return (
    <Container>
      <UserMenu/> 
      <div>USER PROFILE</div>
    </Container>
  );
};

export default UserPurchasesPage;

