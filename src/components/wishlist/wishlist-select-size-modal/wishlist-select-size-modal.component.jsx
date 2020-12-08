import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { selectWishlistItem } from "../../../redux/selectors/wishlist.selectors";
import { closeModal } from "../../../redux/actions/modal.actions";
import {
  displayCart,
  addItemFromWishlist,
} from "../../../redux/actions/cart.actions";

import SelectSize from "../../select-size/select-size.component";
import CustomButton from "../../custom-button/custom-button.component";
import WishlistSizeDropDown from "../wishlist-select-size-dropdown/wishlist-select-size-dropdown.component";
import SizesGuide from "../../sizes-guide/sizes-guide-menu/sizes-guide-menu.component";

import {
  Container,
  TextContainer,
  SelectSizeContainer,
  SizesGuideContainer,
} from "./wishlist-select-size-modal.styles.js";

const WishlistSelectSizeModal = ({ text, item }) => {
  const [selectSizeVisible, setSelectSizeVisible] = useState(false);
  const dispatch = useDispatch();
  const wishlistItem = useSelector((state) =>
    selectWishlistItem(state, item, shallowEqual)
  );
  const { sizes, collection, section } = item;
  return (
    <Container>
      <TextContainer>{text}</TextContainer>
      <SelectSizeContainer>
        <SelectSize
          selectedSize={wishlistItem.selectedSize}
          selectSizeVisible={selectSizeVisible}
          setSelectSizeVisible={setSelectSizeVisible}
        />
        {selectSizeVisible && (
          <WishlistSizeDropDown
            wishlistItem={wishlistItem}
            sizes={sizes}
            setSelectSizeVisible={setSelectSizeVisible}
          />
        )}
      </SelectSizeContainer>
      <SizesGuideContainer>
        <SizesGuide collection={collection} section={section} />
      </SizesGuideContainer>
      <CustomButton
        color="standard"
        onClick={() => {
          if (wishlistItem.selectedSize) {
            dispatch(addItemFromWishlist(wishlistItem));
            dispatch(displayCart());
          }
          dispatch(closeModal());
        }}
      >
        Close
      </CustomButton>
    </Container>
  );
};

export default WishlistSelectSizeModal;
