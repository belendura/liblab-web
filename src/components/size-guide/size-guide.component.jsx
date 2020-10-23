import React, { useState } from "react";

import SizeGuideDetails from "./size-guide-details/size-guide-details.component";
import {
  SizeGuideContainer,
  SizeHanger,
  SizeGuideIcon,
} from "./size-guide.styles";

const SizeGuide = () => {
  const [sizeGuideVisible, setSizeGuideVisible] = useState(false);
  return (
    <SizeGuideContainer>
      <SizeHanger />
      <SizeGuideIcon onClick={() => setSizeGuideVisible(true)}>
        Size Guide
      </SizeGuideIcon>
      {sizeGuideVisible ? (
        <SizeGuideDetails setSizeGuideVisible={setSizeGuideVisible} />
      ) : null}
    </SizeGuideContainer>
  );
};

export default SizeGuide;
