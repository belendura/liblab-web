import React from "react";
import { useDispatch } from "react-redux";

import { openModal } from "../../../../redux/actions/modal.actions";

import {
  PictureList,
  PictureContainer,
  Picture,
} from "./shop-item-pictures.styles";

const ShopItemPictures = ({ url }) => {
  const dispatch = useDispatch();
  return (
    <PictureList>
      {url
        ? url
            .filter((item, index) => index < 7)
            .map((item, index) => {
              return (
                <PictureContainer key={index}>
                  <Picture
                    src={item}
                    onClick={() =>
                      dispatch(openModal("EXTENDED_VIEW", { url, index }))
                    }
                  />
                </PictureContainer>
              );
            })
        : null}
    </PictureList>
  );
};

export default ShopItemPictures;
