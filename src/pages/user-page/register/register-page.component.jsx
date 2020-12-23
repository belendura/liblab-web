import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../../redux/actions/user.actions";
import CustomButton from "../../../components/custom-button/custom-button.component";

import {
  Container,
  Title,
    Form,
  Input,
    TextLink,
    CheckContainer,
    CheckLabel,
    CheckInput,
    CheckInputStyled,
    Icon,
    Text,
    CreateAccount,
} from "./register-page.styles";

const RegisterPage = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const { firstName, lastName, email, password } = userData;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleCheckBoxChange = (event) => {
    const { checked } = event.target;
    setChecked(checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(signUpStart(userData));
  };

  return (
    <Container>
      <Title>Create your Lib-Lab Account</Title>
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
        <Input
          onChange={handleChange}
          placeholder="password"
          type="password"
          name="password"
          value={password}
          label="password"
        />
        <CheckContainer>
        <CheckLabel>
          <CheckInput
            type="checkbox"
            value={userData}
            onChange={handleCheckBoxChange}
          />
          <CheckInputStyled checked={checked}>
            <Icon viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </Icon>
          </CheckInputStyled>
          Remember me
        </CheckLabel>
      </CheckContainer>
        <CustomButton type="submit" color="standard">
          CREATE USER
        </CustomButton>
        <CreateAccount>
        <Text>Have an account?</Text>
        <TextLink to="/login">Log in here</TextLink>
        </CreateAccount>
      </Form>
    </Container>
  );
};

export default RegisterPage;
