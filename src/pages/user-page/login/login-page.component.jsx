import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../../redux/actions/user.actions";

import Button from "../../../components/button/button.component";

import {
  LoginContainer,
  LoginTitle,
  LoginForm,
  LoginInput,
  ForgetPassword,
  CheckLabel,
  CheckInput,
  CheckBox,
  CreateAccount,
  CreateAccountLink,
} from "./login-page.styles";

const LoginPage = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const { email, password } = userData;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(emailSignInStart(email, password));
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
        <ForgetPassword to="/reset-password">
          Forgot your Password?
        </ForgetPassword>
        <Button type="submit" color="standard">
          LOG IN
        </Button>
        <Button
          type="button"
          color="standard"
          onClick={() => dispatch(googleSignInStart())}
        >
          LOG IN WITH GOOGLE
        </Button>
        <CreateAccount>New to LIB-LAB?</CreateAccount>
        <CreateAccountLink to="/register">Create an account</CreateAccountLink>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;
