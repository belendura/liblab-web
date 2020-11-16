import React from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  WhatsAppMenu,
  PinterestMenu,
  EmailMenu,
  FacebookMenu,
} from "./share-dropdown.styles";

const ShareDropdown = () => {
  const history = useHistory();

  return (
    <Container>
      <WhatsAppMenu onClick={() => history.push("https://web.whatsapp.com/")} />
      <PinterestMenu
        onClick={() => history.push("https://web.pinterest.es/")}
      />
      <FacebookMenu onClick={() => history.push("https://web.facebook.com/")} />
      <EmailMenu />
    </Container>
  );
};

export default ShareDropdown;
