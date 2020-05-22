import React, { useState } from "react";

import {
  LoginContainer,
  LoginTitle,
  LoginForm,
  LoginInput,
  ForgetPassword,
  LoginButton,
  CheckLabel,
  CheckInput,
  CheckBox,
  CreateAccount,
  CreateAccountLink,
} from "./login-page.styles";

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const { email, password } = userData;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //emailSignInStart(email, password);
  };

  return (
    <LoginContainer>
      <LoginTitle>LOGIN</LoginTitle>
      <LoginForm onSubmit={handleSubmit}>
        <LoginInput
          onChange={handleChange}
          placeholder="email"
          type="email"
          name="email"
          value={email}
          label="email"
          required
        />
        <LoginInput
          onChange={handleChange}
          placeholder="password"
          type="password"
          name="password"
          value={password}
          label="password"
        />
        <CheckLabel>
          <CheckBox />
          <CheckInput type="checkbox" value={userData} />
          Remember me
        </CheckLabel>
        <ForgetPassword>Forgot your Password?</ForgetPassword>
        <LoginButton type="submit">LOG IN</LoginButton>
      </LoginForm>
      <CreateAccount>New to LIB-LAB?</CreateAccount>
      <CreateAccountLink to="/register">Create an account</CreateAccountLink>
    </LoginContainer>
  );
};

export default Login;
