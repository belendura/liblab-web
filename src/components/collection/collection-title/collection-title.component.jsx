import React from "react";
import { useHistory } from "react-router-dom";

import Button from "../../button/button.component";
import {
  CollectionTitleContainer,
  CollectionTitleStyled,
  CollectionDescription,
} from "./collection-title.styles";

const CollectionTitle = ({ title, description, url }) => {
  const history = useHistory();

  return (
    <CollectionTitleContainer>
      <CollectionTitleStyled>{title}</CollectionTitleStyled>
      <CollectionDescription>{description}</CollectionDescription>
      <Button color="standard" onClick={() => history.push(`/shop/${url}`)}>
        SHOP NOW
      </Button>
    </CollectionTitleContainer>
  );
};

export default CollectionTitle;
