import styled from "styled-components";
import { Link } from "react-router-dom";

export const ResetPasswordContainer = styled.div`
  text-align: center;
  position: relative;
  margin: auto;
  margin-top: 100px;
  width: 40vw;
  border: 1px dotted black;
`;

export const ResetPasswordTitle = styled.span`
  font-size: 40px;
  font-weight: bold;
  margin: 20px;
`;

export const ResetPasswordSubtitle = styled.span`
  /* margin: 10px;*/
  padding: 10px;
  font-size: 12px;
`;

export const ResetPasswordForm = styled.form`
  display: flex;
  flex-direction: column;
`;
export const ResetPasswordInput = styled.input`
  margin: 20px;
  padding: 10px;
`;

export const CancelLink = styled(Link)`
  cursor: pointer;
  padding:10px;

  &:hover {
    color: gold;
  
`;
