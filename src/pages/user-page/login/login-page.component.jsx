import React, { useState } from "react";

import {
  LoginContainer,
  LoginTitle,
  LoginForm,
  LoginInput,
  ForgetPassword,
  LoginButton,
} from "./login-page.styles";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (event) => {};
  return (
    <LoginContainer>
      <LoginTitle>Login</LoginTitle>
      <LoginForm onSubmit={}>
        <LoginInput />
        <LoginInput />
      </LoginForm>
      <ForgetPassword>Forget Password?</ForgetPassword>
      <LoginButton>LOG IN</LoginButton>
    </LoginContainer>
  );
};

export default Login;
