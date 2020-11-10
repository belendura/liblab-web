import React from "react";

import { WOMEN_TOPS_TABLE } from "../../../assets/sizes/women-sizes";
import { Container, Title, Item } from "./size-table.styles";

const SizeTable = () => {
  return (
    <Container>
      <Title>
        Size
        {WOMEN_TOPS_TABLE.Sizes.map((item) => (
          <Item key={item}>{item}</Item>
        ))}
      </Title>
      <Title>
        Bust
        {WOMEN_TOPS_TABLE.Bust.map((item) => (
          <Item key={item}>{item}</Item>
        ))}
      </Title>
      <Title>
        Waist
        {WOMEN_TOPS_TABLE.Waist.map((item) => (
          <Item key={item}>{item}</Item>
        ))}
      </Title>
      <Title>
        Hip
        {WOMEN_TOPS_TABLE.Hip.map((item) => (
          <Item key={item}>{item}</Item>
        ))}
      </Title>
    </Container>
  );
};

export default SizeTable;
