import styled from "styled-components";

import { ReactComponent as HangerLogo } from "../../assets/icons/hanger.svg";

export const SizeGuideContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const SizeHanger = styled(HangerLogo)`
  width: 24px;
  height: auto;
`;

export const SizeGuideIcon = styled.span`
  text-decoration: underline;
  cursor: pointer;
  padding: 0 10px;

  &:hover {
    color: gold;
  }
`;
