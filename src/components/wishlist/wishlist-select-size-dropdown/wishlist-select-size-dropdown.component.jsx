import React from "react";
import { useDispatch } from "react-redux";

import { selectSize } from "../../../redux/actions/wishlist.actions";

import ClickOutside from "../../click-outside/click-outside.component";

import { Container, SizeOption } from "./wishlist-select-size-dropdown.styles";

const WishlistSelectSizeDropDown = ({
  sizes,
  setSelectSizeVisible,
  wishlistItem,
}) => {
  const dispatch = useDispatch();

  return (
    <div>
      <ClickOutside action={() => setSelectSizeVisible(false)}>
        <Container>
          {sizes &&
            sizes.map((item, index) => {
              const { units, size } = item;
              return (
                units > 0 && (
                  <SizeOption
                    key={index}
                    onClick={() => {
                      dispatch(selectSize(wishlistItem, size));
                      setSelectSizeVisible(false);
                    }}
                  >
                    {size}
                  </SizeOption>
                )
              );
            })}
        </Container>
      </ClickOutside>
    </div>
  );
};

export default WishlistSelectSizeDropDown;
