import React from "react";

import { PictureContainer, Picture } from "./sizes-schema.styles";

const SizesSchema = ({ url }) => {
  return (
    <PictureContainer>
      <Picture src={url}></Picture>
    </PictureContainer>
  );
};

export default SizesSchema;
