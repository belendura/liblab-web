import React from "react";
import {useHistory} from "react-router-dom"

import { Container, PictureContainer,Picture,Description } from "./recent-view-preview.styles";

const RecentViewPreview = ({setSearchVisibility,item}) => {
  const history = useHistory();
  const {
    collection,
    section,
    newUrl,
    description,
    reference,
    color,
  } = item;

  return (
      <Container onClick={() =>{
        setSearchVisibility(false);
        history.push(
          `/shop/${collection}/${section}/${description}&${reference}/${color.name}`
        )}}>
      <PictureContainer>
        <Picture
          src={newUrl}
        />
        </PictureContainer>
        <Description>{description}</Description>
     </Container>)
 
};

export default RecentViewPreview;
