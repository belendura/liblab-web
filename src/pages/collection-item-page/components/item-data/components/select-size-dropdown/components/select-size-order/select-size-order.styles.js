import styled from "styled-components";
import { ReactComponent as EmailLogo } from "../../../../../../../../assets/icons/email-logo.svg";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SizeOption = styled.span`
  font-size: 10px;
`;

export const OrderMenu = styled(EmailLogo)`
  width: 14px;
  cursor: pointer;
`;
