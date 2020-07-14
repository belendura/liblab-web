import React from "react";
import { useHistory } from "react-router-dom";

import CustomButton from "../../custom-button/custom-button.component";
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
      <CustomButton
        color="standard"
        onClick={() => history.push(`/shop/${url}`)}
      >
        SHOP NOW
      </CustomButton>
    </CollectionTitleContainer>
  );
};

export default CollectionTitle;
