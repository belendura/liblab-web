import React from "react";

import {
  CollectionCoverContainer,
  CollectionCoverTitle,
} from "./collection-cover.styles";

const CollectionCover = ({ url, title }) => {
  console.log("title", title);
  return (
    <CollectionCoverContainer url={url} l>
      <CollectionCoverTitle>{title}</CollectionCoverTitle>
    </CollectionCoverContainer>
  );
};

export default CollectionCover;
