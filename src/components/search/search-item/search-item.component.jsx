import React from "react";

import {
  SearchItemContainer,
  Image,
  Description,
  Price,
} from "./search-item.styles";

const SearchItem = () => {
 
  return (
    <SearchItemContainer>
      <Image />
      <Description>Description</Description>
      <Price>Price</Price>
    </SearchItemContainer>
  );
};

export default SearchItem;
