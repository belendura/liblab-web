import React from "react";
import { useDispatch } from "react-redux";

import { closeModal } from "../../redux/actions/modal.actions";
import CustomButton from "../custom-button/custom-button.component";

import { Container, TextContainer, ButtonContainer } from "./alerts.styles.js";

const Alerts = ({ text }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <TextContainer>{text}</TextContainer>
      <ButtonContainer>
        <CustomButton color="standard" onClick={() => dispatch(closeModal())}>
          Close
        </CustomButton>
      </ButtonContainer>
    </Container>
  );
};

export default Alerts;
