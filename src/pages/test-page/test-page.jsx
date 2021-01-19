import React, { useEffect } from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";
import queryString from "query-string";
import { Container, Label, List, ListItem, Text } from "./test-page.styled";
import axiosConfig from "../../helpers/axiosConfig.helpers";

const isObject = (value) => typeof value === "object" && value !== null;
const isArray = (value) => isObject(value) && value.constructor === Array;
const isEmptyArray = (array) => !isArray(array) || array.length === 0;

const TestPage = () => {
  const { collection, section } = useParams();
  const { search } = useLocation();
  const history = useHistory();
  const query = queryString.parse(search, { arrayFormat: "comma" });
  console.log(query);
  const { labels, colors } = query;
  const arraySeparator = ", ";
  const labelsEnum = {
    bestSeller: "best-seller",
    new: "new",
    sale: "sale",
  };
  const isNew =
    (isArray(labels)
      ? labels?.some((label) => label === labelsEnum.new)
      : labels === labelsEnum.new) || null;
  const isBestSeller =
    (isArray(labels)
      ? labels?.some((label) => label === labelsEnum.bestSeller)
      : labels === labelsEnum.bestSeller) || null;
  const isSale =
    (isArray(labels)
      ? labels?.some((label) => label === labelsEnum.sale)
      : labels === labelsEnum.sale) || null;
  const parsedColors = isEmptyArray(colors)
    ? colors
    : colors.join(arraySeparator);
  const hasSection = !!section || null;
  useEffect(() => {
    const url = hasSection
      ? `/test/${collection}/${section}`
      : `/test/${collection}`;
    axiosConfig.get(url, {
      params: query,
    });
  }, [collection, hasSection, query, section]);

  return (
    <Container>
      <List>
        <ListItem>
          <Label>Collection: </Label>
          <Text>{collection}</Text>
        </ListItem>
        {hasSection && (
          <ListItem>
            <Label>Section: </Label>
            <Text>{section}</Text>
          </ListItem>
        )}
        {isNew && (
          <ListItem>
            <Label>New</Label>
          </ListItem>
        )}
        {isBestSeller && (
          <ListItem>
            <Label>Best Seller</Label>
          </ListItem>
        )}
        {isSale && (
          <ListItem>
            <Label>Sale</Label>
          </ListItem>
        )}
        <ListItem>
          <Label>Colors: </Label>
          <Text>{parsedColors}</Text>
        </ListItem>
      </List>
      <button onClick={() => history.goBack()}>Home</button>
    </Container>
  );
};

export default TestPage;
