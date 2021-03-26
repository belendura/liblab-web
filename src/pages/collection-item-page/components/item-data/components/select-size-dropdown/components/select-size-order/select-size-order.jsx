import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { openModal } from "../../../../../../../../redux/actions/modal.actions";

import { Container, SizeOption, OrderMenu } from "./select-size-order.styles";

const SelectSizeOrder = ({ size, colors }) => {
  const dispatch = useDispatch();
  const params = useParams();

  const { urlReference } = params;

  return (
    <Container>
      <SizeOption>{`${size} - Not available`}</SizeOption>
      <OrderMenu
        onClick={() =>
          dispatch(openModal("REQUEST_ITEM", { urlReference, colors, size }))
        }
      />
    </Container>
  );
};

export default SelectSizeOrder;
