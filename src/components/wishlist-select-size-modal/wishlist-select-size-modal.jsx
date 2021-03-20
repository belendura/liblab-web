import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { selectWishlistItem } from "../../redux/selectors/wishlist.selectors";
import { closeModal } from "../../redux/actions/modal.actions";
import { fetchSizesGuideStart } from "../../redux/actions/sizes-guide.actions";
import { displayCart, addItem } from "../../redux/actions/cart.actions";

import SelectSize from "../select-size";
import CustomButton from "../custom-button";
import WishlistSizeDropDown from "./components/wishlist-select-size-dropdown";
import SizesGuideMenu from "../sizes-guide-menu";

import {
  Container,
  TextContainer,
  SelectSizeContainer,
  SizesGuideContainer,
} from "./wishlist-select-size-modal.styles.js";

const WishlistSelectSizeModal = ({ text, item, user }) => {
  const [selectSizeVisible, setSelectSizeVisible] = useState(false);
  const dispatch = useDispatch();
  const wishlistItem = useSelector((state) =>
    selectWishlistItem(state, item, shallowEqual)
  );
  const { sizes, collection, section } = item;

  useEffect(() => {
    dispatch(fetchSizesGuideStart(collection, section));
  }, [fetchSizesGuideStart, collection, section]);

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
        <SizesGuideMenu collection={collection} section={section} />
      </SizesGuideContainer>
      <CustomButton
        color="standard"
        onClick={() => {
          if (wishlistItem.selectedSize) {
            dispatch(addItem(wishlistItem, wishlistItem.selectedSize, user));
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
