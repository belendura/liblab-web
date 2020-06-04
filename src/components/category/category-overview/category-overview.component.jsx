import React from "react";
import { useHistory } from "react-router-dom";

import { CategoryOverviewContainer, Title } from "./category-overview .styles";

const CategoryOverview = ({ title }) => {
  const history = useHistory();
  return (
    <CategoryOverviewContainer onClick={() => history.push(`/shop/${title}`)}>
      <Title to="/shop/women">Woman</Title>
    </CategoryOverviewContainer>
  );
};

export default CategoryOverview;
