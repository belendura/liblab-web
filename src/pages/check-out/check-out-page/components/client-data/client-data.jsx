import React from "react";
import { useDispatch } from "react-redux";

import { openModal } from "../../../../../redux/actions/modal.actions";
import CustomButton from "../../../../../components/custom-button";
import { Container, Title, Text } from "./client-data.styles";

const ClientData = ({ client, setClient }) => {
  const dispatch = useDispatch();
  // console.log("client", client);
  const { displayName, email, phoneNumber } = client;
  return (
    <Container>
      <Title>Client data</Title>
      <Text>{displayName}</Text>
      <Text>{email}</Text>
      <Text>{phoneNumber}</Text>
      <CustomButton
        color="standard"
        onClick={() => dispatch(openModal("CLIENT_DATA"))}
      >
        Edit
      </CustomButton>
    </Container>
  );
};

export default ClientData;
