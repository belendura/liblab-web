import React from "react";

import {
  Container,
  TitleContainer,
  Title,
  Text,
  ArrowUP,
  ArrowDOWN,
} from "./item-details.styles";

const Details = ({ title, text, textVisible, setTextVisible }) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
        {textVisible ? (
          <ArrowUP onClick={() => setTextVisible(false)} />
        ) : (
          <ArrowDOWN onClick={() => setTextVisible(true)} />
        )}
      </TitleContainer>
      {textVisible && title === "Details" && <Text>{text}</Text>}
      {textVisible &&
        title === "Fabric & Care" &&
        text.map((item, index) => {
          return (
            <div key={index}>
              <Text>{item.percent}%</Text>
              <Text>{item.material}</Text>
            </div>
          );
        })}
      {textVisible &&
        title === "Care" &&
        text.map((item, index) => {
          return <div key={index}>CARE</div>;
        })}
    </Container>
  );
};

export default Details;
