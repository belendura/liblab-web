import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: thin solid black;
  padding: 10px;
`;

export const Title = styled.h2`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ModeContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

export const Input = styled.input`
  margin-right: 5px;
  cursor: pointer;
`;

export const ModeInfo = styled.p`
  font-size: 8px;
`;

export const Price = styled.span`
  font-size: 10px;
  font-weight: bold;
  margin-left: auto;
`;

export const Label = styled.label`
  font-size: 10px;
  margin-right: 5px;
`;
