import React from "react";

import SizesGuideInfo from "../sizes-guide-info/sizes-guide-info.component";

import { Container, Title } from "./sizes-guide-modal.styles";

const SizesGuideModal = ({ section }) => {
  return (
    <Container>
      <Title>SIZES GUIDE</Title>
      <SizesGuideInfo section={section} />
    </Container>
  );
};

export default SizesGuideModal;
