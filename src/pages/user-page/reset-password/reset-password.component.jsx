import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { resetPasswordStart } from "../../../redux/actions/user.actions";

import Button from "../../../components/button/button.component";

import {
  ResetPasswordContainer,
  ResetPasswordTitle,
  ResetPasswordSubtitle,
  ResetPasswordForm,
  ResetPasswordInput,
  CancelLink,
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
    <ResetPasswordContainer>
      <ResetPasswordTitle>Reset your Password</ResetPasswordTitle>
      <ResetPasswordSubtitle>
        Enter your email below and we will email you instructions to reset your
        password!
      </ResetPasswordSubtitle>
      <ResetPasswordForm onSubmit={handleSubmit}>
        <ResetPasswordInput
          onChange={handleChange}
          placeholder="email"
          type="email"
          name="email"
          value={email}
          label="email"
          required
        />
        <Button type="submit" color="standard">
          SUBMIT
        </Button>
        <CancelLink to="/login">Cancel</CancelLink>
      </ResetPasswordForm>
    </ResetPasswordContainer>
  );
};

export default ResetPasswordPage;
