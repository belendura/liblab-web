import styled from "styled-components";
import { ReactComponent as ArrowUp } from "../../../../assets/icons/arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../../../assets/icons/arrow-down.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-right: 10px;
  ${"" /* border: thin solid black; */}
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  ${"" /* border: thin solid black; */}
`;

export const Title = styled.span`
  font-size: 12px;
`;

export const Text = styled.span`
  font-size: 10px;
  ${"" /* border: thin solid black; */}
`;

export const ArrowUP = styled(ArrowUp)`
  width: 8px;
  cursor: pointer;
`;
export const ArrowDOWN = styled(ArrowDown)`
  width: 8px;
  cursor: pointer;
`;
