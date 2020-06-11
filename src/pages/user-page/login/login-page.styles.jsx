import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as CheckBoxLogo } from "../../../assets/icons/checkbox.svg";

export const LoginContainer = styled.div`
  text-align: center;
  position: relative;
  margin: auto;
  margin-top: 100px;
  width: 40vw;
  border: 1px dotted black;
`;

export const LoginTitle = styled.span`
  font-size: 40px;
  font-weight: bold;
  margin: 20px;
`;
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;
export const LoginInput = styled.input`
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
  cursor: pointer;
  &:hover {
    color: gold;
  }
`;

export const LoginButton = styled.button`
  margin: 10px 20px;
  padding: 10px 0;
  font-size: 20px;
  background-color: grey;
  color: white;
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: #d3d0c6;
  }
`;

export const CreateAccountLink = styled(Link)`
  padding: 10px 0;
`;

export const CreateAccount = styled.span`
  margin-top: 20px;
  font-weight: bold;
`;
