import React, { Fragment } from "react";

import CollectionItemPreview from "./components/collection-item-preview";

const BestSellersList = ({ shopItems }) => {
  const nonFeaturedCollections = ["women", "men", "unisex"];

  return (
    <Fragment>
      {nonFeaturedCollections.map((element) => {
        return shopItems
          .filter((item, index) => {
            const { collection } = item;
            return element === collection;
          })
          .filter((item, index) => index < 1)
          .map((item, index) => (
            <CollectionItemPreview key={index} item={item} />
          ));
      })}
    </Fragment>
  );
};

export default BestSellersList;
