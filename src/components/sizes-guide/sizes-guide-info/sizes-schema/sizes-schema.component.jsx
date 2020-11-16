import React from "react";

import { Container, Schema } from "./sizes-schema.styles";

const SizesSchema = ({ url }) => {
  return (
    <Container>
      {url &&
        Object.values(url).map((item, index) => {
          return <Schema key={index} url={item}></Schema>;
        })}
    </Container>
  );
};

export default SizesSchema;
