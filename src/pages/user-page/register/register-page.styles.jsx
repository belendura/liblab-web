import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as CheckBoxLogo } from "../../../assets/icons/checkbox.svg";

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
  padding: 10px;
`;

export const CheckInput = styled.input`
  padding: 10px;
  margin: 20px 0;
  width: 30px;
  &:focus {
    background-color: grey;
  }
`;

export const CheckBox = styled(CheckBoxLogo)`
  height: 30px;
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
