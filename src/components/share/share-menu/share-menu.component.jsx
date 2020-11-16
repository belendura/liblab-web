import React, { useState } from "react";
// import { useDispatch } from "react-redux";

// import { openModal } from "../../../redux/actions/modal.actions";

import ShareDropdown from "../share-dropdown/share-dropdown.component";
import Share from "../share/share.component";
import { Container, ShareContainer, Text } from "./share-menu.styles";

const ShareMenu = () => {
  const [shareOptionsvisibility, setShareOptionsVisibility] = useState(false);
  // const dispatch = useDispatch();
  return (
    <Container>
      <ShareContainer
        onClick={() => setShareOptionsVisibility(!shareOptionsvisibility)}
      />
      <Text onClick={() => setShareOptionsVisibility(!shareOptionsvisibility)}>
        Share
      </Text>
      {shareOptionsvisibility && <Share />}
      {/* <ShareMenu onClick={() => dispatch(openModal("SHARE_ITEM"))}>
        Share
      </ShareMenu> */}
    </Container>
  );
};

export default ShareMenu;
