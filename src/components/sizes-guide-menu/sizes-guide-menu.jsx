import React from "react";
import { useDispatch } from "react-redux";

import { openSecondModal } from "../../redux/actions/modal.actions";

import { Container, Hanger, Title } from "./sizes-guide-menu.styles";

const SizesGuideMenu = ({ collection, section }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Hanger
        onClick={() =>
          dispatch(openSecondModal("SIZES_GUIDE", { collection, section }))
        }
      />
      <Title
        onClick={() =>
          dispatch(openSecondModal("SIZES_GUIDE", { collection, section }))
        }
      >
        Sizes Guide
      </Title>
    </Container>
  );
};

export default SizesGuideMenu;
