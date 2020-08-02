import React from "react";

import {
  ItemDetailsContainer,
  ItemDetailsHead,
  ItemDetailsTitle,
  ItemDetailsText,
  ItemDetailsArrowUP,
  ItemDetailsArrowDOWN,
} from "./item-details.styles";

const ItemDetails = ({ title, text, textVisible, setTextVisible }) => {
  return (
    <ItemDetailsContainer>
      <ItemDetailsHead>
        <ItemDetailsTitle>{title}</ItemDetailsTitle>
        {textVisible ? (
          <ItemDetailsArrowUP onClick={() => setTextVisible(false)} />
        ) : (
          <ItemDetailsArrowDOWN onClick={() => setTextVisible(true)} />
        )}
      </ItemDetailsHead>
      <br />
      {textVisible && title === "Details" ? (
        <ItemDetailsText>{text}</ItemDetailsText>
      ) : null}
      {textVisible && title === "Fabric"
        ? text.map((item, index) => {
            return (
              <div key={index}>
                <ItemDetailsText>{item.percent}%</ItemDetailsText>
                <ItemDetailsText>{item.material}</ItemDetailsText>
              </div>
            );
          })
        : null}
      {textVisible && title === "Care"
        ? text.map((item) => {
            return <div>CARE</div>;
          })
        : null}
    </ItemDetailsContainer>
  );
};

export default ItemDetails;
