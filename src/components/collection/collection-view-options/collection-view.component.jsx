import React from "react";
import { useDispatch } from "react-redux";

import {
  resetGridView,
  setGridView,
} from "../../../redux/actions/collections.actions";

import {
  CollectionViewContainer,
  CollectionViewText,
  CollectionViewOption,
  CollectionViewSeparator,
} from "./collection-view.styles";

const CollectionViewOptions = () => {
  const dispatch = useDispatch();
  return (
    <CollectionViewContainer>
      <CollectionViewText>Ver</CollectionViewText>
      <CollectionViewOption onClick={() => dispatch(resetGridView())}>
        2
      </CollectionViewOption>
      <CollectionViewSeparator />
      <CollectionViewOption onClick={() => dispatch(setGridView())}>
        4
      </CollectionViewOption>
    </CollectionViewContainer>
  );
};

export default CollectionViewOptions;
