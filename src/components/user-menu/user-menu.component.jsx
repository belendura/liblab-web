import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { signOutStart } from "../../redux/actions/user.actions";
import { toggleCartHidden } from "../../redux/actions/cart.actions";
import { selectCartHidden } from "../../redux/selectors/cart.selectors";

import { Container, TextLink, Text } from "./user-menu.styles";

const UserMenu= () => {

    const dispatch = useDispatch();
    const cartHidden = useSelector(selectCartHidden, shallowEqual);
  
    return (
      <Container>
        <TextLink to="user/profile">My details</TextLink> 
        <TextLink to="user/my-purchases">My purchases</TextLink> 
        <TextLink to="/returns">Returns</TextLink>
        <TextLink to="user/refunds">Refunds</TextLink>
        <TextLink to="user/wishlist">My favourites</TextLink>
        <TextLink to="/newsletter">Subscriptions</TextLink>
        <TextLink to="user/edit-password">Edit Password</TextLink>
        <Text color="standard"
          onClick={() => {
            dispatch(signOutStart());
            !cartHidden && dispatch(toggleCartHidden());
          }}
        >
          LOG OUT
        </Text>
      </Container>)
};

export default UserMenu;
