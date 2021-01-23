import React from "react";
import PropTypes from "prop-types";
import { fromServerEnumerate } from "../../../../firebase/enumerate";
import { Container, Title, Picture } from "./card.styled";

const Card = ({ index, value, onClick, key }) => {
  return (
    <Container key={index}>
      <Picture src={value} />
      <Title onClick={onClick}>
        {fromServerEnumerate[key].replace("-", " ")}
      </Title>
    </Container>
  );
};

Card.propTypes = {
  index: PropTypes.number,
  value: PropTypes.string,
  onClick: PropTypes.func,
  key: PropTypes.string,
};

export default Card;
