import React from "react";
import { useDispatch } from "react-redux";

import {
  CollectionViewContainer,
  CollectionViewText,
  CollectionViewOption,
  CollectionViewSeparator 
} from "./collection-view.styles";

const CollectionViewOptions = () => {
  const dispatch = useDispatch();
  return (
    <CollectionViewContainer>
      <CollectionViewText>Ver</CollectionViewText>
      <CollectionViewOption>2</CollectionViewOption>
      <CollectionViewSeparator/>
      <CollectionViewOption>4</CollectionViewOption>
    </CollectionViewContainer>
  );
};

export default CollectionViewOptions;
