import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  EmailShareButton,
  EmailIcon,
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
        <FacebookIcon />
      </FacebookShareButton>
      <PinterestShareButton
        media={
          "https://pinterest.com/pin/create/button/?$http://localhost:3000/shop/women/scrub-tops/DIANA-REFSCW20001BG/sand"
        }
        description={"By LibLab"}
      >
        <PinterestIcon />
      </PinterestShareButton>
      <EmailShareButton
        subject={"Liblab"}
        body={
          "belen.dura@gmail.com&http://localhost:3000/shop/women/scrub-tops/DIANA-REFSCW20001BG/sand"
        }
        separator={"&"}
      >
        <EmailIcon />
      </EmailShareButton>
    </Container>
  );
};

export default Share;
