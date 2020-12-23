import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import {
  resetGridView,
  setGridView,
} from "../../../redux/actions/collections.actions";
import {selectGridView} from "../../../redux/selectors/collections.selectors"
import {
  Container,
  Title,
  ViewOption,
  Separator,
} from "./collection-view.styles";

const CollectionViewOptions = () => {
  const dispatch = useDispatch();
  const gridView=useSelector(selectGridView,shallowEqual)
  return (
    <Container>
      <Title>View</Title>
      <ViewOption gridView={gridView} gridOption={false} onClick={() => dispatch(resetGridView())}>2</ViewOption>
      <Separator />
      <ViewOption gridView={gridView} gridOption={true} onClick={() => dispatch(setGridView())}>4</ViewOption>
    </Container>
  );
};

export default CollectionViewOptions;
