import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../../redux/actions/user.actions";

import { selectCartItems } from "../../../redux/selectors/cart.selectors";
import { selectWishlistItems } from "../../../redux/selectors/wishlist.selectors";

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
} from "./login-page.styles";

const LoginPage = () => {
  const [checked, setChecked] = useState(false);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const { email, password } = userData;

  const cart = useSelector(selectCartItems, shallowEqual);
  const wishlist = useSelector(selectWishlistItems, shallowEqual);
 
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
    dispatch(emailSignInStart(email, password, cart, wishlist));
  };

  return (
    <Container>
      <Title>Login</Title>
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
        <Input
          onChange={handleChange}
          placeholder="password"
          type="password"
          name="password"
          value={password}
          label="password"
          required
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
        <TextLink to="/reset-password">
          Forgot your Password?
        </TextLink>
        <CustomButton type="submit" color="standard">
          LOG IN
        </CustomButton>
        <CustomButton
          type="button"
          color="standard"
          onClick={() => dispatch(googleSignInStart(cart, wishlist))}
        >
          LOG IN WITH GOOGLE
        </CustomButton>
        <CreateAccount>
        <Text>New to LIB-LAB?</Text>
        <TextLink to="/register">Create an account</TextLink>
        </CreateAccount>
      </Form>

    </Container>
  );
};

export default LoginPage;
