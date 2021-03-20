import React, { useState } from "react";

import Share from "./components/share";
import { Container, ShareContainer, Text } from "./share-menu.styles";

const ShareMenu = () => {
  const [shareOptionsvisibility, setShareOptionsVisibility] = useState(false);

  return (
    <Container>
      <ShareContainer
        onClick={() => setShareOptionsVisibility(!shareOptionsvisibility)}
      />
      <Text onClick={() => setShareOptionsVisibility(!shareOptionsvisibility)}>
        Share
      </Text>
      {shareOptionsvisibility && <Share />}
    </Container>
  );
};

export default ShareMenu;
