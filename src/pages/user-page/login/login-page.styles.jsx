import styled from "styled-components";
import { Link } from "react-router-dom";

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

// export const CheckLabel = styled.label`
//   padding: 10px;
// `;

export const CheckLabel = styled.label`
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// export const CheckInput = styled.input`
//   padding: 10px;
//   margin: 20px 0;
//   width: 30px;
//   &:focus {
//     background-color: grey;
//   }
// `;

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
