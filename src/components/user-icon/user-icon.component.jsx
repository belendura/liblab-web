import React, { useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { UserIconContainer, UserLink, User } from "./User-icon.styles";

const UserIcon = () => {
  const dispatch = useDispatch();
  return (
    <UserIconContainer onClick={() => dispatch()}>
      <UserLink to="/login">
        <User />
      </UserLink>
    </UserIconContainer>
  );
};

export default UserIcon;
