import React from "react";

import ShopItemPreview from "../../shop-item-preview/shop-item-preview.component";
import image_1 from "../../../assets/images/image_1.jpg";
import image_2 from "../../../assets/images/image_2.jpg";
import image_4 from "../../../assets/images/image_4.jpg";

import { BestSellersListContainer } from "./best-sellers-list.styles";

const BestSellersList = () => {
  return (
    <BestSellersListContainer>
      <ShopItemPreview
        url={image_1}
        description={"Scrub DIANA"}
        price={"75"}
        newItem={true}
      />
      <ShopItemPreview
        url={image_2}
        description={"Scrub BERTA"}
        price={"55"}
        newItem={false}
      />
      <ShopItemPreview
        url={image_4}
        description={"Scrub LILA"}
        price={"60"}
        newItem={true}
      />
    </BestSellersListContainer>
  );
};

export default BestSellersList;
