import React from "react";
import { useHistory } from "react-router-dom";

import {
  CategoryTitleContainer,
  CategoryTitleStyled,
  CategoryDescription,
  CategoryButton,
} from "./category-title.styles";

const CategoryTitle = ({ title, description, url }) => {
  const history = useHistory();

  return (
    <CategoryTitleContainer>
      <CategoryTitleStyled>{title}</CategoryTitleStyled>
      <CategoryDescription>{description}</CategoryDescription>
      <CategoryButton onClick={() => history.push(`/shop/${url}`)}>
        SHOP NOW
      </CategoryButton>
    </CategoryTitleContainer>
  );
};

export default CategoryTitle;
