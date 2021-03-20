import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import {
  resetInPairsView,
  setInPairsView,
} from "../../../../redux/actions/collections.actions";
import { selectInPairsView } from "../../../../redux/selectors/collections.selectors";
import { Container, Title, View, Separator } from "./view-mode.styles";

const ViewMode = () => {
  const dispatch = useDispatch();
  const inPairsView = useSelector(selectInPairsView, shallowEqual);
  return (
    <Container>
      <Title>View</Title>
      <View
        inPairsView={inPairsView}
        inPairs={false}
        onClick={() => dispatch(resetInPairsView())}
      >
        2
      </View>
      <Separator />
      <View
        inPairsView={inPairsView}
        inPairsOption={true}
        onClick={() => dispatch(setInPairsView())}
      >
        4
      </View>
    </Container>
  );
};

export default ViewMode;
