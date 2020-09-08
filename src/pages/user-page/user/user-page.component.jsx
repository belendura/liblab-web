import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { signOutStart } from "../../../redux/actions/user.actions";
import { toggleCartHidden } from "../../../redux/actions/cart.actions";
import { selectCartHidden } from "../../../redux/selectors/cart.selectors";

import CustomButton from "../../../components/custom-button/custom-button.component";

const UserPage = () => {
  const dispatch = useDispatch();
  const cartHidden = useSelector(selectCartHidden, shallowEqual);
  return (
    <div>
      USER PAGE
      <CustomButton
        onClick={() => {
          dispatch(signOutStart());
          !cartHidden && dispatch(toggleCartHidden());
        }}
      >
        LOG OUT
      </CustomButton>
    </div>
  );
};

export default UserPage;
