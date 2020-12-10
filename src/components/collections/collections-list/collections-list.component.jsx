import React, { Fragment } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { selectCollectionsPictures } from "../../../redux/selectors/collections.selectors";

import CollectionOverview from "../collection-overview/collection-overview.component";

const CollectionsList = ({ size }) => {
  const pictures = useSelector(selectCollectionsPictures, shallowEqual);

  return (
    <Fragment>
      {pictures &&
        Object.entries(pictures).map(([key, value]) => {
          return (
            (key === "men" || key === "women" || key === "unisex") && (
              <CollectionOverview
                key={key}
                title={key}
                url={value}
                size={size}
              />
            )
          );
        })}
    </Fragment>
  );
};

export default CollectionsList;
