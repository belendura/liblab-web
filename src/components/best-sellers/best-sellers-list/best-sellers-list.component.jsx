import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import { selectSection } from "../../../redux/selectors/collections.selectors";

import ShopItemPreview from "../../shop-item/shop-item-preview/shop-item-preview.component";

import { Container } from "./best-sellers-list.styles";

const BestSellersList = () => {
  const section = useSelector(selectSection, shallowEqual);
  return (
    <Container>
      {section &&
        section
          .filter((item, index) => index < 3)
          .map((item, index) => {
            return <ShopItemPreview key={index} item={item} />;
          })}
    </Container>
  );
};

export default BestSellersList;
