import React from "react";
import PropTypes from "prop-types";

import { fromServerEnumerate } from "../../../../../../firebase/enumerate";

import { Container, Picture, Title } from "./card.styles";

const Card = ({ name, url, onClick }) => {
  return (
    <Container>
      <Picture src={url} />
      <Title onClick={onClick}>
        {fromServerEnumerate[name].replace("-", " ")}
      </Title>
    </Container>
  );
};

Card.propTypes = {
  index: PropTypes.number,
  url: PropTypes.string,
  onClick: PropTypes.func,
  name: PropTypes.string,
};

export default Card;
