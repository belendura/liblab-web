import React from "react";
import { useDispatch } from "react-redux";

import { openModal } from "../../redux/actions/modal.actions";

import { Container, Hanger, Title } from "./size-guide.styles";

const SizeGuide = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Hanger onClick={() => dispatch(openModal("SIZE_GUIDE_MODAL", null))} />
      <Title onClick={() => dispatch(openModal("SIZE_GUIDE_MODAL", null))}>
        Size Guide
      </Title>
    </Container>
  );
};

export default SizeGuide;
