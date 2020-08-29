import styled from "styled-components";
import { ReactComponent as ArrowLogo } from "../../../assets/icons/arrow-up.svg";
import { ReactComponent as EmailLogo } from "../../../assets/icons/email-logo.svg";

export const SelectSizeOrderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SelectSizeOrderOption = styled.span``;

export const SelectSizeOrderLogo = styled(EmailLogo)`
  width: 14px;
  cursor: pointer;
`;
