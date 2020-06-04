import React from "react";
import { useHistory } from "react-router-dom";

import { ShopOverviewContainer, Title } from "./shop-overview.styles";

const ShopOverview = () => {
  const history = useHistory();
  return (
    <ShopOverviewContainer onClick={() => history.push("/shop/women")}>
      <Title to="/shop/women">Women</Title>
    </ShopOverviewContainer>
  );
};

export default ShopOverview;
