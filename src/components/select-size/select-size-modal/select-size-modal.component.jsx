import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { requestSizeStart } from "../../../redux/actions/request-size.actions";
import { closeModal } from "../../../redux/actions/modal.actions";

import CustomButton from "../../custom-button/custom-button.component";

import {
  Container,
  ButtonContainer,
  Alert,
  Label,
  Email,
} from "./select-size-modal.styles";

const SelectSizeModal = ({ reference, color, size }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [alertvisibility, setAlertVisibility] = useState(false);

  const handleRequest = () => {
    console.log("email", email);
    if (email.length === 0) {
      setAlertVisibility(true);
    } else {
      dispatch(
        requestSizeStart(
          { reference: reference, color: color, size: size },
          { email: email }
        )
      );
      dispatch(closeModal());
    }
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <Container>
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
      {alertvisibility && <Alert />}
      <ButtonContainer>
        <CustomButton color="standard" onClick={handleRequest}>
          Receive notification
        </CustomButton>
      </ButtonContainer>
    </Container>
  );
};

export default SelectSizeModal;
