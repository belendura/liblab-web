import React from "react";

import UserMenu from "../../../components/user-menu";

import { Container } from "./user-purchases-page.styles";

const UserPurchasesPage = () => {
  return (
    <Container>
      <UserMenu />
      <div>USER PROFILE</div>
    </Container>
  );
};

export default UserPurchasesPage;
