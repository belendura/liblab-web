import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../../redux/actions/user.actions";

import CustomButton from "../../../components/custom-button/custom-button.component";

import {
  LoginContainer,
  LoginTitle,
  LoginForm,
  LoginInput,
  ForgetPassword,
  CheckLabel,
  CheckInput,
  CheckInputStyled,
  Icon,
  CreateAccount,
  CreateAccountLink,
} from "./login-page.styles";

const LoginPage = () => {
  const [checked, setChecked] = useState(false);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const { email, password } = userData;

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
          required
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
        <ForgetPassword to="/reset-password">
          Forgot your Password?
        </ForgetPassword>
        <CustomButton type="submit" color="standard">
          LOG IN
        </CustomButton>
        <CustomButton
          type="button"
          color="standard"
          onClick={() => dispatch(googleSignInStart())}
        >
          LOG IN WITH GOOGLE
        </CustomButton>
        <CreateAccount>New to LIB-LAB?</CreateAccount>
        <CreateAccountLink to="/register">Create an account</CreateAccountLink>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;
