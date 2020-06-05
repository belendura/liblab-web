import React from "react";

import ShopItem from "../../shop-item/shop-item.component";
import image_1 from "../../../assets/images/image_1.jpg";
import image_2 from "../../../assets/images/image_2.jpg";
import image_4 from "../../../assets/images/image_4.jpg";

import { BestSellersListContainer } from "./best-sellers-list.styles";

const BestSellersList = () => {
  return (
    <BestSellersListContainer>
      <ShopItem
        url={image_1}
        description={"Scrub DIANA"}
        price={"75 EUR"}
        newItem={true}
      />
      <ShopItem
        url={image_2}
        description={"Scrub BERTA"}
        price={"55 EUR"}
        newItem={false}
      />
      <ShopItem
        url={image_4}
        description={"Scrub LILA"}
        price={"60 EUR"}
        newItem={true}
      />
    </BestSellersListContainer>
  );
};

export default BestSellersList;
