import React, { useState } from "react";


import CustomButton from "../../custom-button/custom-button.component";

import {
  Container,
  Title,
    Form,
  Input,
    Text,
   
} from "./promo-code.styles";

const PromoCode = () => {
  const [code, setCode] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setCode(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
console.log("applyCode")
  };

  return (
    <Container>
      <Title>PROMOTION CODE OR GIFT CARD</Title>
      <Text>
        Enter your code
      </Text>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          placeholder="code"
          type="text"
          name="code"
          value={code}
          label="code"
        />
        <CustomButton type="submit" color="standard">
          APPLY
        </CustomButton>
      </Form>
    </Container>
  );
};

export default PromoCode;
