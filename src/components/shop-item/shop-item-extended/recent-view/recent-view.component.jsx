import React from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";

import { Container, Picture } from "./recent-view.styles";

const RecentView = ({ item }) => {
  const history = useHistory();
  const { collection, section, newUrl, description, reference, color } = item;

  const query = {
    details: `${description.replace(" ", "-")}`,
    colors: `${color.name.replace(" ", "-")}`,
  };

  const pathName = `/shop/${collection}/${section.replace(
    " ",
    "-"
  )}/${reference}?${queryString.stringify(query, {
    arrayFormat: "comma",
  })}`;

  return (
    <Container>
      <Picture src={newUrl} onClick={() => history.push(pathName)} />
    </Container>
  );
};

export default RecentView;
