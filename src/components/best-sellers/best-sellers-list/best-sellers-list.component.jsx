import React, { Fragment } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { selectSection } from "../../../redux/selectors/collections.selectors";

import ShopItemPreview from "../../shop-item/shop-item-preview/shop-item-preview.component";

const BestSellersList = () => {
  const section = useSelector(selectSection, shallowEqual);
  return (
    <Fragment>
      {section &&
        section
          .filter((item, index) => index < 3)
          .map((item, index) => {
            return <ShopItemPreview key={index} item={item} />;
          })}
    </Fragment>
  );
};

export default BestSellersList;
