import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { requestSizeStart } from "../../../redux/actions/request-size.actions";

import CustomButton from "../../custom-button/custom-button.component";

import {
  Container,
  ButtonContainer,
  Label,
  Email,
} from "./select-size-modal.styles";

const SelectSizeModal = ({ reference, color, size }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(requestSizeStart({ reference, color, size }, email));
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
      <form onSubmit={handleSubmit}>
        <Email
          onChange={handleChange}
          placeholder="Enter yor e-mail address"
          type="email"
          name="email"
          value={email}
          label="email"
          required
        />
        <ButtonContainer>
          <CustomButton
            color="standard"
            onClick={() =>
              dispatch(
                requestSizeStart(
                  { reference: reference, color: color, size: size },
                  email
                )
              )
            }
          >
            Receive notification
          </CustomButton>
        </ButtonContainer>
      </form>
    </Container>
  );
};

export default SelectSizeModal;
