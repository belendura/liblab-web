import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { requestItemStart } from "../../../redux/actions/shop.actions";
import { closeModal } from "../../../redux/actions/modal.actions";

import CustomButton from "../../custom-button/custom-button.component";

import {
  Container,
  ButtonContainer,
  Form,
  Alert,
  Label,
  Email,
} from "./request-item-modal.styles";

const RequestItemModal = ({ reference, color, size }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [alertvisibility, setAlertVisibility] = useState(false);

  const handleRequest = (event) => {
    event.preventDefault();
    dispatch(
      requestItemStart(
        { reference: reference, color: color, size: size },
        { email: email }
      )
    );
    dispatch(closeModal());
  };

  const handleAlert = (event) => {
    if (email.length === 0) {
      setAlertVisibility(true);
    }
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <Container>
      <Form onSubmit={handleRequest}>
        <Label>
          Enter your e-mail address and we will notify you <br /> if the item
          becomes available again.
        </Label>

        <Email
          onChange={handleChange}
          placeholder="Enter yor e-mail address"
          type="email"
          name="email"
          value={email}
          label="email"
          required
        />
        {alertvisibility && <Alert>Insert a correct e-mail</Alert>}
        <ButtonContainer>
          <CustomButton color="standard" onClick={handleAlert}>
            Receive notification
          </CustomButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default RequestItemModal;
