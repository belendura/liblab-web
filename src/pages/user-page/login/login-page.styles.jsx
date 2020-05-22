import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 30vw;
`;

export const LoginTitle = styled.span`
  font-size: 20px;
`;
export const LoginForm = styled.form`
  padding: 10px;
`;
export const LoginInput = styled.input`
  padding: 10px;
`;
export const ForgetPassword = styled(Link)`
  padding: 10px;
`;

export const LoginButton = styled.button`
  padding: 10px;
`;
export const CreateAccountLink = styled(Link)`
  padding: 10px 0;
`;

export const CreateAccount = styled.span`
  font-weight: bold;
`;
