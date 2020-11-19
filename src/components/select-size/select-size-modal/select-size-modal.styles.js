import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  margin: 10px;

  ${"" /* border: thin solid black; */}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${"" /* border: thin solid black; */}
`;

export const Label = styled.label`
  font-size: 10px;
  padding: 5px;
`;

export const Email = styled.input`
  margin: 15px;
  ${"" /* border: thin solid black; */}
`;

export const Alert = styled.span`
  color: red;
  font-size: 10px;
  margin-bottom: 15px;
  text-align: center;

  ${"" /* border: thin solid black; */}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  ${"" /* border: thin solid black; */}
`;
