import React from "react";
import { useHistory } from "react-router-dom";

import Button from "../../button/button.component";
import {
  CategoryTitleContainer,
  CategoryTitleStyled,
  CategoryDescription,
} from "./category-title.styles";

const CategoryTitle = ({ title, description, url }) => {
  const history = useHistory();

  return (
    <CategoryTitleContainer>
      <CategoryTitleStyled>{title}</CategoryTitleStyled>
      <CategoryDescription>{description}</CategoryDescription>
      <Button color="standard" onClick={() => history.push(`/shop/${url}`)}>
        SHOP NOW
      </Button>
    </CategoryTitleContainer>
  );
};

export default CategoryTitle;
