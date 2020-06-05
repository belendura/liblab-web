import React from "react";

import CategoryOverview from "../../category/category-overview/category-overview.component";

import image_1 from "../../../assets/images/image_1.jpg";
import image_2 from "../../../assets/images/image_2.jpg";
import image_3 from "../../../assets/images/image_3.jpg";
import image_4 from "../../../assets/images/image_4.jpg";

import { CategoriesListContainer } from "./categories-list.styles";

const CategoriesList = () => {
  return (
    <CategoriesListContainer>
      <CategoryOverview title="women" url={image_1} />
      <CategoryOverview title="men" url={image_2} />
      <CategoryOverview title="unisex" url={image_3} />
      <CategoryOverview title="accesories" url={image_4} />
    </CategoriesListContainer>
  );
};

export default CategoriesList;
