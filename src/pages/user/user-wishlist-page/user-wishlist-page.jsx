import React from "react";

import UserMenu from "../../../components/user-menu";

import { Container } from "./user-wishlist-page.styles";

const UserWishlistPage = () => {
  return (
    <Container>
      <UserMenu />
      <div>USER PROFILE</div>
    </Container>
  );
};

export default UserWishlistPage;
