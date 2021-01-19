import React from "react";
import {useLocation} from "react-router-dom"
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  EmailShareButton,
  EmailIcon,
  WhatsappShareButton,
  WhatsappIcon
} from "react-share";

import { Container } from "./share.styles";

const Share = ({ image }) => {
    const {pathname} = useLocation()
    const baseUrl = "http://localhost:3000"
  return (
    <Container>
      <FacebookShareButton
        url={`${baseUrl}${pathname}`}
        quote={"LibLab - World is yours to explore"}
        hashtag="#liblab"
     >
        <FacebookIcon size={20}/>
      </FacebookShareButton>
      <PinterestShareButton
        media={image}
        description={"By LibLab"}
        url={`${baseUrl}${pathname}`}
      >
        <PinterestIcon size={20}/>
      </PinterestShareButton>
      <WhatsappShareButton
          url={`${baseUrl}${pathname}`}
        title={"LibLab - World is yours to explore"}
      separator=":: "
      >
        <WhatsappIcon size={20}/>
      </WhatsappShareButton>
      <EmailShareButton
        subject={"Liblab"}
        body={
          "hey check my website"
        }
        separator={" "}
        url={`${baseUrl}${pathname}`}
        onClick={() => {}}
        openShareDialogOnClick
      >
        <EmailIcon size={20}/>
      </EmailShareButton>
    </Container>
  );
};

export default Share;
