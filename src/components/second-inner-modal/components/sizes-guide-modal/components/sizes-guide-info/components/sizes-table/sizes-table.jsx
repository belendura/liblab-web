import React from "react";

import {
  Container,
  ColumnContainer,
  ColumnTitle,
  Item,
} from "./sizes-table.styles";

const SizesTable = ({ sizes, title }) => {
  return (
    <Container>
      {sizes &&
        Object.entries(sizes)
          .filter((item) => {
            const [key] = item;
            return key === title && item;
          })
          .map((item) => {
            const [key, value] = item;
            return (
              <ColumnContainer key={key}>
                <ColumnTitle>{key}</ColumnTitle>
                {value.map((valueItem, index) => (
                  <Item key={index}>{valueItem}</Item>
                ))}
              </ColumnContainer>
            );
          })}
      {sizes &&
        Object.entries(sizes)
          .filter((item) => {
            const [key, value] = item;
            return key !== title && item;
          })
          .map((item) => {
            const [key, value] = item;
            return (
              <ColumnContainer key={key}>
                <ColumnTitle>{key}</ColumnTitle>
                {value.map((valueItem, index) => (
                  <Item key={index}>{valueItem}</Item>
                ))}
              </ColumnContainer>
            );
          })}
    </Container>
  );
};

export default SizesTable;
