import React from "react";
import { useDispatch } from "react-redux";

import {
  resetGridView,
  setGridView,
} from "../../../redux/actions/collections.actions";

import {
  Container,
  Title,
  ViewOption,
  Separator,
} from "./collection-view.styles";

const CollectionViewOptions = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Title>View</Title>
      <ViewOption onClick={() => dispatch(resetGridView())}>2</ViewOption>
      <Separator />
      <ViewOption onClick={() => dispatch(setGridView())}>4</ViewOption>
    </Container>
  );
};

export default CollectionViewOptions;
