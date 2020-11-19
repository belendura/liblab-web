import React from "react";
import { useDispatch } from "react-redux";

import { openModal } from "../../../../redux/actions/modal.actions";

import { Container, PicContainer, Picture } from "./shop-item-pictures.styles";

const ShopItemPictures = ({ url }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <PicContainer>
        {url
          ? url
              .filter((item, index) => index < 7)
              .map((item, index) => (
                <Picture
                  key={index}
                  url={item}
                  onClick={() =>
                    dispatch(openModal("EXTENDED_VIEW", { url, index }))
                  }
                />
              ))
          : null}
      </PicContainer>
    </Container>
  );
};

export default ShopItemPictures;
