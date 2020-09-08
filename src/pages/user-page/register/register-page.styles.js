import styled from "styled-components";
import { Link } from "react-router-dom";

export const RegisterContainer = styled.div`
  text-align: center;
  position: relative;
  margin: auto;
  margin-top: 100px;
  width: 40vw;
  border: 1px dotted black;
`;

export const RegisterTitle = styled.span`
  font-size: 25px;
  font-weight: bold;
  margin: 20px;
`;
export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
`;
export const RegisterInput = styled.input`
  margin: 20px;
  padding: 10px;
`;

export const CheckLabel = styled.label`
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckInput = styled.input`
  display: none;
`;

export const Icon = styled.svg`
  stroke: black;
  stroke-width: 4px;
  fill: none;
  margin-bottom: 4px;
`;

export const CheckInputStyled = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin: 0 10px;
  border: 1px solid black;
  border-radius: 3px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;
export const ForgetPassword = styled(Link)`
  padding: 10px;
  font-weight: bold;
`;

export const LoginLink = styled(Link)`
  padding: 10px 0;
`;

export const Login = styled.span`
  margin-top: 20px;
  font-weight: bold;
`;
