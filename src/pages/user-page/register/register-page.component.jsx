import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../../redux/actions/user.actions";
import CustomButton from "../../../components/custom-button/custom-button.component";

import {
  RegisterContainer,
  RegisterTitle,
  RegisterForm,
  RegisterInput,
  CheckLabel,
  CheckInput,
  CheckInputStyled,
  Icon,
  Login,
  LoginLink,
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
    <RegisterContainer>
      <RegisterTitle>Create your Lib-Lab Account</RegisterTitle>
      <RegisterForm onSubmit={handleSubmit}>
        <RegisterInput
          onChange={handleChange}
          placeholder="first name"
          type="text"
          name="firstName"
          value={firstName}
          label="firstName"
          required
        />
        <RegisterInput
          onChange={handleChange}
          placeholder="last name"
          type="text"
          name="lastName"
          value={lastName}
          label="lastName"
          required
        />
        <RegisterInput
          onChange={handleChange}
          placeholder="email"
          type="email"
          name="email"
          value={email}
          label="email"
          required
        />
        <RegisterInput
          onChange={handleChange}
          placeholder="password"
          type="password"
          name="password"
          value={password}
          label="password"
        />

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

        <CustomButton type="submit" color="standard">
          CREATE USER
        </CustomButton>
        <Login>Have an account?</Login>
        <LoginLink to="/login">Log in here</LoginLink>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default RegisterPage;
