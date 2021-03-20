import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  EmailShareButton,
  EmailIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

import { Container } from "./share.styles";

const Share = ({ props }) => {
  return (
    <Container>
      <FacebookShareButton
        url={"http://localhost:3000/"}
        quote={"LibLab - World is yours to explore"}
        hashtag="#liblab"
        //className={classes.socialMediaButton}
      >
        <FacebookIcon size={20} />
      </FacebookShareButton>
      <PinterestShareButton
        media={
          "https://firebasestorage.googleapis.com/v0/b/liblab-web.appspot.com/o/Collections%2FWomen%2Fw_tops04.jpg?alt=media&token=a2383afc-af8d-4be3-b00e-13f4f07b654e"
        }
        description={"By LibLab"}
      >
        <PinterestIcon size={20} />
      </PinterestShareButton>
      <WhatsappShareButton
        url={"http://localhost:3000/"}
        title={"LibLab - World is yours to explore"}
        separator=":: "
      >
        <WhatsappIcon size={20} />
      </WhatsappShareButton>
      <EmailShareButton
        subject={"Liblab"}
        body={
          "belen.dura@gmail.com http://localhost:3000/shop/women/scrub-tops/DIANA-REFSCW20001BG/sand"
        }
        separator={" "}
      >
        <EmailIcon size={20} />
      </EmailShareButton>
    </Container>
  );
};

export default Share;
