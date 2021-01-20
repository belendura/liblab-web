import React, { Fragment } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { selectCollectionsPictures } from "../../../redux/selectors/collections.selectors";
import { fromServerEnumerate } from "../../../firebase/enumerate";

import CollectionOverview from "../collection-overview/collection-overview.component";

const CollectionsList = ({ size }) => {
  const pictures = useSelector(selectCollectionsPictures, shallowEqual);

  return (
    <Fragment>
      {pictures &&
        Object.entries(pictures).map(([key, value]) => {
          return (
            (fromServerEnumerate[key] === "men" ||
              fromServerEnumerate[key] === "women" ||
              fromServerEnumerate[key] === "unisex") && (
              <CollectionOverview
                key={key}
                title={fromServerEnumerate[key]}
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
