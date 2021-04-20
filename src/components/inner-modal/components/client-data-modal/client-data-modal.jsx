import React, { useState } from "react";

import CustomButton from "../../../custom-button";
import ClientAddress from "./components/client-address";

import {
  Container,
  Form,
  Input,
  ButtonContainer,
} from "./client-data-modal.styles";

const ClientDataModal = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const { firstName, lastName, email } = userData;
  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // dispatch(updateUserStart(userData));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          placeholder="first name"
          type="text"
          name="firstName"
          value={firstName}
          label="firstName"
          required
        />
        <Input
          onChange={handleChange}
          placeholder="last name"
          type="text"
          name="lastName"
          value={lastName}
          label="lastName"
          required
        />
        <Input
          onChange={handleChange}
          placeholder="email"
          type="email"
          name="email"
          value={email}
          label="email"
          required
        />
        <ButtonContainer>
          <CustomButton color="standard">CANCEL</CustomButton>
          <CustomButton type="submit" color="standard">
            EDIT
          </CustomButton>
        </ButtonContainer>
      </Form>
      <ClientAddress />
    </Container>
  );
};

export default ClientDataModal;
