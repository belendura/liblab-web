import React from "react";
import { useHistory } from "react-router-dom";

import { CategoryOverviewContainer, Title } from "./category-overview.styles";

const CategoryOverview = ({ title, url }) => {
  const history = useHistory();
  return (
    <CategoryOverviewContainer
      url={url}
      onClick={() => history.push(`/shop/${title}`)}
    >
      <Title to="/shop/`${title}`">{title}</Title>
    </CategoryOverviewContainer>
  );
};

export default CategoryOverview;
