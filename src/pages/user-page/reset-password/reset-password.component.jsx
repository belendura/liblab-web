import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { resetPasswordStart } from "../../../redux/actions/user.actions";

import CustomButton from "../../../components/custom-button/custom-button.component";

import {
  Container,
  Title,
    Form,
  Input,
    TextLink,
    Text,
   
} from "./reset-password.styles";

const ResetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(resetPasswordStart(email));
  };

  return (
    <Container>
      <Title>Reset your Password</Title>
      <Text>
        Enter your email below and we will email you instructions to reset your
        password!
      </Text>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          placeholder="email"
          type="email"
          name="email"
          value={email}
          label="email"
          required
        />
        <CustomButton type="submit" color="standard">
          SUBMIT
        </CustomButton>
        <TextLink to="/login">Cancel</TextLink>
      </Form>
    </Container>
  );
};

export default ResetPasswordPage;
