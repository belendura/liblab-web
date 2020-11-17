import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  ${"" /* margin: 20px 10px; */}
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${"" /* border: thin solid black; */}
`;

export const Label = styled.label`
  font-size: 10px;
`;

export const Email = styled.input`
  margin: 15px;
  ${"" /* border: thin solid black; */}
`;

export const Alert = styled.span`
  color: red;
  font-size: 10px;
  text-align: center;

  border: thin solid black;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  ${"" /* border: thin solid black; */}
`;
