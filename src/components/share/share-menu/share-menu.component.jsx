import React, { useState } from "react";

import Share from "../share/share.component";
import { Container, ShareContainer, Text } from "./share-menu.styles";

const ShareMenu = ({image}) => {
  const [shareOptionsvisibility, setShareOptionsVisibility] = useState(false);

  return (
    <Container>
      <ShareContainer
        onClick={() => setShareOptionsVisibility(!shareOptionsvisibility)}
      />
      <Text onClick={() => setShareOptionsVisibility(!shareOptionsvisibility)}>
        Share
      </Text>
      {shareOptionsvisibility && <Share image={image} />}
    </Container>
  );
};

export default ShareMenu;
