import React from "react";
import { useHistory } from "react-router-dom";

import { ShopOverviewContainer, Title } from "./shop-overview.styles";

const ShopOverview = ({ title, url }) => {
  const history = useHistory();

  return (
    <ShopOverviewContainer
      url={url}
      onClick={() => history.push(`/shop/${title}`)}
    >
      <Title to="/shop/`${title}`">{title}</Title>
    </ShopOverviewContainer>
  );
};

export default ShopOverview;
